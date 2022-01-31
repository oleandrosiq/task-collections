export type ColorData = 'purple' | 'pink' | 'green' | 'yellow' | 'blue' | 'orange' | 'red';

export interface TaskData {
  id: string;
  description: string; 
  status: 'todo' | 'done';
  collection_id: string;
};

export interface CollectionData {
  id: string;
  name: string;
  color: ColorData;
  tasks: TaskData[];
};