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
import { toast } from "react-toastify";

function* handleRegister(action) {
    try {
        const res = yield call(registerAPI, action.payload);
        toast.success("User Registered Successfully");
        yield put(registerSuccess(res));
    } catch (error) {
        toast.error(error.response.data.message)
        yield put(registerFailure(error?.response?.data?.message));
    }
}

function* handleLogin(action) {
    try {
        const res = yield call(loginAPI, action.payload);
        toast.success("Logged In Successfully")
        yield put(loginSuccess(res));
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
        yield put(loginFailure(error?.response?.data?.message))
    }
}

function* handleMe(action) {
    try {
        const res = yield call(meAPI, action.payload);
        yield put(meSuccess(res));
    } catch (error) {
        yield put(meFailure(error?.response?.data?.message))
    }
}

export default function* authSaga() {
    yield takeLatest(REGISTER_REQUEST, handleRegister);
    yield takeLatest(LOGIN_REQUEST, handleLogin);
    yield takeLatest(ME_REQUEST, handleMe);
}