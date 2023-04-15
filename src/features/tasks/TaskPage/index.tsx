import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import { ParagraphStyled } from "../../paragraphStyled";
import { RootState } from "../../../store";

function TaskPage() {
  const { id } = useParams<{ id: string }>();
  const task = useSelector((state: RootState) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😥 "}
        body={
          !!task && (
            <>
              <ParagraphStyled>
                <strong>Ukończono: </strong>
                {task.done ? "Tak" : "Nie"}
              </ParagraphStyled>
            </>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;

// useParams is a hook provided by the react-router-dom library that allows you to access URL parameters
// in your components. In this case, { id } is the parameter we want to access from the URL, and since
// URL parameters are always strings, id is defined as a string type.
