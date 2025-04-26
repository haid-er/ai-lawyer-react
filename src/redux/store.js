import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers/root.reducer";
import rootSaga from "./saga/root.saga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
