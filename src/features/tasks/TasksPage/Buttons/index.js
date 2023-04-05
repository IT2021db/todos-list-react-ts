import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Buttons } from "./styled";
import {
    toggleHideDone,
    setAllDone,
    selectIsEveryTaskDone,
    selectAreTasksEmpty,
    selectHideDone
} from "../../tasksSlice";

const Button = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();
    return (
        <div>
            {!areTasksEmpty && (
                <>
                    <Buttons onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Buttons>
                    <Buttons
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Buttons>
                </>
            )}
        </div>
    )
};

export default Button;