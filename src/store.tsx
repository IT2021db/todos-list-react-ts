import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from './features/tasks/tasksSlice';
import { watchFetchExampleTasks } from "./tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store= configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchExampleTasks);
export type RootState = ReturnType<typeof store.getState>

export default store;
