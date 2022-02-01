import { CollectionData, ColorData } from '../types/collection';

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

export function updateCollection(collection: CollectionData): CollectionData[] {
  const collections = getCollections();

  const updatedCollections = collections.map(c => c.id === collection.id ? collection : c);

  localStorage.setItem('collections', JSON.stringify(updatedCollections));

  return updatedCollections;
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