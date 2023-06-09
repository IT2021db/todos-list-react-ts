import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useRef, FormEvent } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Input";
import { addTask } from "../../tasksSlice";
import { StyledForm, Button } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <StyledForm onSubmit={onFormSubmit} className="form">
      <Input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        autoFocus
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
