import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CollectionData, ColorData } from '../../types/collection';
import { createCollection, getCollections } from '../../services/collection';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MainModal, MainModalHandles } from '../../components/MainModal';
import { PaletteColors, PaletteColorsHandles } from '../../components/PaletteColors';

import { Container, Collections, Collection, Tag, ButtonAddNewCollection, ContentModal, Buttons } from './styles';

const schema = yup.object().shape({
  name: yup.string().required('O nome da coleção é obrigatório'),
});

export function Dashboard() {
  const [collections, setCollections] = useState<CollectionData[]>([]);

  const modalRef = useRef<MainModalHandles>(null);
  const paletteRef = useRef<PaletteColorsHandles>(null);

  const { register, clearErrors, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  function handleCreateCollection({ name }: { name: string }) {
    const color = paletteRef.current?.getColorSelect() as ColorData;

    const collection = createCollection({ name, color });

    setCollections([...collections, collection]);

    reset();
    paletteRef.current?.resetColorSelect();
    modalRef.current?.closeModal();
  }

  useEffect(() => {
    function loadCollections() {
      const collections = getCollections();
      setCollections(collections);
    }

    loadCollections();
  }, []);

  return (
    <Container>
      <h1>Collections</h1>

      <Collections>
        { collections?.map(collection => (
          <Link key={collection.id} href={`/collection/${collection.id}`} passHref>
            <Collection>
              <Tag variant={collection.color}>
                <img src='/icons/tag.svg' alt='Tag' />
              </Tag>

              <span>
                <strong>{collection.name}</strong>
                <p>{collection.tasks.length > 0 ? `${collection.tasks.length} tasks` : 'No tasks'}</p>
              </span>
            </Collection>
          </Link>
        )) }

        <ButtonAddNewCollection type='button' onClick={() => modalRef.current?.openModal()}>  
          <FiPlus size={23} color='var(--white)' />
          Add new collection
        </ButtonAddNewCollection>
      </Collections>

      <MainModal 
        ref={modalRef}
        titleModal='Add Collection'
      >
        <ContentModal onSubmit={handleSubmit(handleCreateCollection)}>
          <Input 
            type='text' 
            placeholder='My Collection' 
            label='Nome'
            {...register('name')}
            error={errors.name}
            onClick={() => clearErrors('name')}
          />

          <span>
            <p>Color</p>
            <PaletteColors ref={paletteRef} />
          </span>

          <Buttons>
            <Button 
              type='submit'
              textButton='Salvar'
              size='sm'
            />

            <Button 
              textButton='Cancelar'
              size='sm'
              variant='secondary'
              onClick={() => modalRef.current?.closeModal()}
            />
          </Buttons>
        </ContentModal>
      </MainModal>
    </Container>
  );
}