import { CollectionData, ColorData, TaskData } from '../types/collection';

interface CreateCollectionProps {
  name: string;
  color: ColorData;
};

export function createCollection({ name, color }: CreateCollectionProps): CollectionData {
  const collection = {
    id: crypto.randomUUID(),
    name,
    color,
    tasks: [] as [],
  };

  saveCollection(collection);

  return collection;
}

export function saveCollection(collection: CollectionData): CollectionData[] {
  const collectionsStorage = localStorage.getItem('collections');
  const collections = collectionsStorage ? JSON.parse(collectionsStorage) : [];

  const updatedCollections = [...collections, collection];

  localStorage.setItem('collections', JSON.stringify(updatedCollections));

  return updatedCollections;
}

interface UpdateCollectionProps {
  id: string;
  name?: string;
  color?: ColorData;
  tasks?: TaskData[];
};

export function updateCollection({ id, name, color, tasks }: UpdateCollectionProps): CollectionData {
  const collections = getCollections();

  const collection = getCollectionById(id);

  const collectionUpdated  = {
    ...collection,
  };

  if (name) collectionUpdated.name = name;
  if (color) collectionUpdated.color = color;
  if (tasks) collectionUpdated.tasks = tasks;

  const updatedCollections = collections.map(c => c.id === id ? collectionUpdated : c);

  localStorage.setItem('collections', JSON.stringify(updatedCollections));

  return collectionUpdated;
}

export function getCollections(): CollectionData[] {
  const collectionsStorage = localStorage.getItem('collections');
  const collections = collectionsStorage ? JSON.parse(collectionsStorage) : [];
  return collections;
} 

export function getCollectionById(id: string): CollectionData | null {
  const collections = getCollections();
  const collection = collections.find(collection => collection.id === id);
  
  if (!collection) return null; 

  return collection;
}

export function saveCollections(collesctions: CollectionData[]) {
  localStorage.setItem('collections', JSON.stringify(collesctions));
}

export function deleteCollection(id: string) {
  const collections = getCollections();
  const updatedCollections = collections.filter(collection => collection.id !== id);

  saveCollections(updatedCollections);
}