import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import authSaga from "./saga/auth.saga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: authSaga,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: true,
});

sagaMiddleware.run(authSaga);

export default store;
