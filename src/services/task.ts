import { CollectionData, TaskData } from "../types/collection";
import { getCollectionById, updateCollection } from "./collection";

export function createTask({ description, collection_id }: { description: string, collection_id: string }): CollectionData {
  const task = {
    id: crypto.randomUUID(),
    description,
    status: 'todo',
    collection_id,
  } as TaskData;

  const collectionUpdated = saveTask(task);

  return collectionUpdated;
}

export function saveTask(task: TaskData): CollectionData {
  const collection = getCollectionById(task.collection_id);

  const collectionUpdated = {
    ...collection,
    tasks: [...collection.tasks, task],
  };

  updateCollection(collectionUpdated);
  return collectionUpdated;
}

export function updateTask(task: TaskData): CollectionData {
  const collection = getCollectionById(task.collection_id);

  const collectionUpdated = {
    ...collection,
    tasks: collection.tasks.map(t => t.id === task.id ? task : t),
  };

  updateCollection(collectionUpdated);
  return collectionUpdated;
}