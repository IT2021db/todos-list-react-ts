import React from 'react';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../tasksSlice';
import { useSelector } from "react-redux";
import { ParagraphStyled } from "../../paragraphStyled";


// interface GetTaskById {
//     state: 
//     id:string;
// }


function TaskPage() {
    const { id } = useParams<{id: string}>();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥 "}
                body={!!task && (
                    <>
                        <ParagraphStyled>
                            <strong>Ukończono: </strong>
                            {(task.done ? "Tak" : "Nie")}
                        </ParagraphStyled>
                    </>
                )}
            />
        </Container>
    );
}

export default TaskPage;

