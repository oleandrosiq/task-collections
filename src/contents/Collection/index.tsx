import { useEffect, useMemo, useState } from 'react';
import { FiCheck, FiChevronLeft, FiPlus } from 'react-icons/fi';
import router from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CollectionData, TaskData } from '../../types/collection';
import { Button } from '../../components/Button';

import { Container, Header, Tasks, Task, InputAddContainer, ButtonCheck } from './styles';
import { createTask, updateTask } from '../../services/task';
import { getCollectionById } from '../../services/collection';

const schema = yup.object().shape({
  description: yup.string().required('A descrição é obrigatória').max(60, 'A descrição deve ter no máximo 60 caracteres'),
});

export function Collection({ id}: { id: string }) {
  const [collection, setCollection] = useState<CollectionData>(null);

  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const tasks = useMemo(() => {
    const tasksTodo = collection?.tasks.filter((task) => task.status === 'todo');
    return tasksTodo;
  }, [collection]);

  const tasksDone = useMemo(() => {
    const tasksDone = collection?.tasks.filter((task) => task.status === 'done');
    return tasksDone;
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
      </Header>
      <Tasks>
        <h2>Tasks - {tasks?.length || '0'}</h2>

        { tasks?.map(task => (
          <Task key={task.id}>
            <ButtonCheck border={collection?.color} onClick={() => handleCompletedTask(task)} />
            <p>{task.description}</p>
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
          <Task variant='done'>
            <ButtonCheck done={collection?.color} onClick={() => handleUndoTask(task)}>
              <FiCheck size={19} color='var(--black)' />
            </ButtonCheck>
            <p>{task.description}</p>
          </Task>
        )) }
      </Tasks>
    </Container>
  );
}