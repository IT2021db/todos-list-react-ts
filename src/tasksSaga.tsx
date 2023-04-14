import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./features/tasks/getExampleTasks";
import { saveTasksInLocalStorage } from "./features/tasks/tasksLocalStorage";
import {
    fetchExampleTasks,
    fetchExampleTasksError,
    fetchExampleTasksSuccess,
    selectTasks
} from "./features/tasks/tasksSlice";
// I used the type Generator<any, void, any> as the return type for the generator function 
//because it doesn't return any value, but performs operations of fetching, processing, 
//and saving data.
function* saveTasksInLocalStorageHandler(): Generator<any, void, any> {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* fetchExampleTasksHandler(): Generator<any, void, any> {
    try {
        delay(3000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło  nie tak!");
    }
};

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};

// The type "Generator<any, void, any>" is a generic type in TypeScript that represents 
// a generator of values of any type.

// The "any" type in the first generic parameter means that the generator can yield values of any type.

// "void" in the second generic parameter means that the generator doesn't take any values as arguments.

// "any" in the third generic parameter means that the generator can be terminated by throwing 
// any kind of exception or by calling the "return" function.

// The Generator<any, void, any> type is often used in TypeScript when we want to implement
//  a generator function that can yield values of different types,
//  but doesn't take any input arguments.
