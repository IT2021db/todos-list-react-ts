import React from "react";
import { RootState } from "../../../../store";
import { Task } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { useQueryParameter } from "../queryParameters";
import { Link } from "react-router-dom";
import { List, Item, Content, Button } from "./styled";
import { toTask } from "../../../../routes";
import searchQueryParamName from "../searchQueryParamName";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";

const TasksList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state: RootState) =>
    selectTasksByQuery(state, query)
  );
  const hideDone: boolean = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task: Task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={toTask({ id: task.id.toString() })}>{task.content}</Link>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
//RootState in this code is a type defined for the root state object in a Redux store.
// The RootState type is defined using the createSlice function from the @reduxjs/toolkit package, 
// which generates a type for the root state object based on the shape of the state managed by each slice. 
// This allows for type-safe access to the state properties in components that use the useSelector hook 
// to select data from the store.
// In this code RootState is used as the type parameter for the useSelector hook 
// to select the relevant slices of state from the Redux store. 