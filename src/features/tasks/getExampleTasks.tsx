import {Task}from "../../types";

export const getExampleTasks = async (): Promise<Task[]> => {
  const response = await fetch("/todos-list-ts/exampleTasks.json");
  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.json();
};
