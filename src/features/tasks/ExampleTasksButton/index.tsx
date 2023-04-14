import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Buttons } from "../TasksPage/Buttons/styled";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";

export const ExampleTasksButton = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  return (
    <div>
      <>
        <Buttons
          onClick={() => dispatch(fetchExampleTasks())}
          disabled={loading}
        >
          {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Buttons>
      </>
    </div>
  );
};
