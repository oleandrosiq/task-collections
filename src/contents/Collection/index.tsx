import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FiCheck, FiChevronLeft, FiPlus } from 'react-icons/fi';
import { IoEllipsisHorizontal, IoEllipsisVertical } from 'react-icons/io5';
import router from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CollectionData, TaskData } from '../../types/collection';
import { createTask, deleteTask, updateTask } from '../../services/task';
import { deleteCollection, getCollectionById, updateCollection } from '../../services/collection';

import { MainModal, MainModalHandles } from '../../components/MainModal';
import { PaletteColors, PaletteColorsHandles } from '../../components/PaletteColors';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Dropdown } from '../../components/Dropdown';

import { Container, Header, Tasks, Task, InputAddContainer, ButtonCheck, ContentModal, ButtonsModal } from './styles';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  description: yup.string().required('A descrição é obrigatória').max(60, 'A descrição deve ter no máximo 60 caracteres'),
});

const schemaEdit = yup.object().shape({
  name: yup.string().required('O nome da coleção é obrigatório'),
});

export function Collection({ id }: { id: string }) {
  const [collection, setCollection] = useState<CollectionData>(null);

  const modalRef = useRef<MainModalHandles>(null);
  const paletteRef = useRef<PaletteColorsHandles>(null);

  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { 
    register: registerEdit, 
    handleSubmit: handleSubmitEdit, 
    reset: resetEdit, 
    clearErrors: clearErrorsEdit, 
    formState: { errors: errorsEdit } 
  } = useForm({
    resolver: yupResolver(schemaEdit),
  });

  const tasks = useMemo(() => {
    const tasksTodo = collection?.tasks.filter((task) => task.status === 'todo');
    return tasksTodo;
  }, [collection]);

  const tasksDone = useMemo(() => {
    const tasksDone = collection?.tasks.filter((task) => task.status === 'done');
    return tasksDone;
  }, [collection]);

  const handleDeleteCollection = useCallback(() => {
    deleteCollection(id);
    router.push('/dashboard');
  }, [id]);

  const handleUpdateCollection = useCallback(({ name }) => {
    const color = paletteRef.current?.getColorSelect();
    const collectionUpdated = updateCollection({ id: collection?.id, name, color });
   
    setCollection(collectionUpdated);
    modalRef.current?.closeModal();
  }, [collection]);

  function handleCreateTask(data: { description: string }) {
    const collectionUpdated = createTask({ description: data.description, collection_id: collection.id });
    setCollection(collectionUpdated);
    reset();
  }

  function handleCompletedTask(task: TaskData) {
    const collectionUpdated = updateTask({
      ...task,
      status: 'done',
    });

    setCollection(collectionUpdated);
  }

  function handleUndoTask(task: TaskData) {
    const collectionUpdated = updateTask({
      ...task,
      status: 'todo',
    });

    setCollection(collectionUpdated);
  }

  function handleDeleteTask(task: TaskData) {
    const collectionUpdated = deleteTask(task);
    setCollection(collectionUpdated);
    toast.success('Task deleted successfully');
  }

  const optionsDropdown = useMemo(() => {
    return [
      { 
        handleOnClick: () => modalRef.current?.openModal(), 
        label: 'Edit Collection',
      },
      { 
        handleOnClick: handleDeleteCollection, 
        label: 'Delete Collection',
      },
    ];
  }, []);

  useEffect(() => {
    function loadCollection() {
      const collection = getCollectionById(id);
      setCollection(collection);
    }

    loadCollection();
  }, [id]);

  return (
    <Container>
      <Header>
        <span>
          <Button 
            hasIcon={true}
            variant='iconPrimary'
            size='icon'
            icon={<FiChevronLeft size={25} color='var(--white)' />}
            onClick={() => router.back()}
          />

          <h1>{collection?.name}</h1>
        </span>

        <Dropdown 
          options={optionsDropdown} 
          icon={<IoEllipsisHorizontal size={22} color='var(--gray)' />} 
        />
      </Header>

      <Tasks>
        <h2>Tasks - {tasks?.length || '0'}</h2>

        { tasks?.map(task => (
          <Task key={task.id}>
            <span>
              <ButtonCheck border={collection?.color} onClick={() => handleCompletedTask(task)} />
              <p>{task.description}</p>
            </span>

            <Dropdown 
              options={[
                {
                  label: 'Edit',
                  handleOnClick: () => {}
                },
                {
                  label: 'Delete',
                  handleOnClick: () => handleDeleteTask(task),
                },
              ]} 
              icon={<IoEllipsisVertical size={22} color='var(--gray)' />} 
              side='right'
            />
          </Task>
        )) }

        <InputAddContainer onSubmit={handleSubmit(handleCreateTask)} variant={!!errors.description ? 'error' : null}>
          <ButtonCheck done={collection?.color} type='submit'>
            <FiPlus size={19} color='var(--black)' />
          </ButtonCheck>

          <input 
            type='text' 
            placeholder={!!errors.description ? errors.description.message : 'Add task'}
            {...register('description')}
            onClick={() => clearErrors('description')} 
          />
        </InputAddContainer>
      </Tasks>
      <Tasks style={{ marginTop: '5rem' }}>
        <h2>Completed - {tasksDone?.length || '0'}</h2>

        { tasksDone?.map(task => (
          <Task variant='done' key={task.id}>
            <span>
              <ButtonCheck done={collection?.color} onClick={() => handleUndoTask(task)}>
                <FiCheck size={19} color='var(--black)' />
              </ButtonCheck>
              <p>{task.description}</p>
            </span>

            <Dropdown 
              options={[{
                label: 'Delete',
                handleOnClick: () => handleDeleteTask(task),
              },]} 
              icon={<IoEllipsisVertical size={22} color='var(--gray)' />} 
              side='right'
            />
          </Task>
        )) }
      </Tasks>

      <MainModal 
        titleModal='Edit Collection' 
        ref={modalRef}
      >
        <ContentModal onSubmit={handleSubmitEdit(handleUpdateCollection)}>
          <Input 
            label='Name' 
            placeholder='My Collection'
            defaultValue={collection?.name}
            {...registerEdit('name')}
            error={errorsEdit.name}
            onClick={() => clearErrorsEdit('name')}
          />

          <PaletteColors ref={paletteRef} defaultColor={collection?.color} />

          <ButtonsModal>
            <Button 
              type='submit'
              textButton='Update' 
              size='md'
            />

            <Button 
              textButton='Cancel' 
              size='md'
              variant='secondary'
              onClick={() => modalRef.current?.closeModal()}
            />
          </ButtonsModal>
        </ContentModal>
      </MainModal>
    </Container>
  );
}