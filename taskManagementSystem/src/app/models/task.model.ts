export interface Task {
  id: number;
  title: string;
  completed: boolean;
  dueDate: Date;
  category: string;
  userId: string;
}