import { call, put, takeLatest } from "redux-saga/effects"
import {
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    ME_REQUEST
} from "../constant/auth.constants"

import {
    registerAPI,
    loginAPI,
    meAPI
} from "../apis/auth.api"

import { loginFailure, loginSuccess, meFailure, meSuccess, registerFailure, registerSuccess } from "../actions/auth.actions"

function* handleRegister(action) {
    try {
        const res = call(registerAPI, action.payload);
        yield put(registerSuccess(res));
    } catch (error) {
        yield put(registerFailure(error));
    }
}

function* handleLogin(action) {
    try {
        const res = call(loginAPI, action.payload);
        yield put(loginSuccess(res));
    } catch (error) {
        yield put(loginFailure(error))
    }
}

function* handleMe(action) {
    try {
        const res = call(meAPI, action.payload);
        yield put(meSuccess(res));
    } catch (error) {
        yield put(meFailure(error))
    }
}

export default function* authSaga() {
    yield takeLatest(REGISTER_REQUEST, handleRegister);
    yield takeLatest(LOGIN_REQUEST, handleLogin);
    yield takeLatest(ME_REQUEST, handleMe);
}