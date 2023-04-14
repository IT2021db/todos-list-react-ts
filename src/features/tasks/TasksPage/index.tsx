import React from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import TasksList from "./TasksList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { ExampleTasksButton } from "../ExampleTasksButton";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderElement={<ExampleTasksButton />}
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderElement={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
