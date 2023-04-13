import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./features/tasks/getExampleTasks";
import { saveTasksInLocalStorage } from "./features/tasks/tasksLocalStorage";
import {
    fetchExampleTasks,
    fetchExampleTasksError,
    fetchExampleTasksSuccess,
    selectTasks
} from "./features/tasks/tasksSlice";
//dodaj typ string
function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* fetchExampleTasksHandler() {
    try {
        delay(3000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło  nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}