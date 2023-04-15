export const getExampleTasks = async () => {
  const response = await fetch("/todos-list-ts/exampleTasks.json");
  if (!response.ok) {
    new Error(response.statusText);
  }
  return await response.json();
};
