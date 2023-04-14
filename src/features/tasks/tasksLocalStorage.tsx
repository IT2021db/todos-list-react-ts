import { Task } from "./types";

const localStorageKey: string = "tasks";

export const saveTasksInLocalStorage = (tasks?: string): void =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem(localStorageKey);
  return tasks ? JSON.parse(tasks) : [];
};
