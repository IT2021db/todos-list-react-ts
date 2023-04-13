const localStorageKey: string = "tasks";

export const saveTasksInLocalStorage = (tasks?: string): void =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

  interface Task {
    id: number;
    content: string;
    done: boolean;
  }
export const getTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem(localStorageKey);
  return tasks ? JSON.parse(tasks) : [];
};
