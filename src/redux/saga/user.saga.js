import { call, put, takeLatest } from "redux-saga/effects"

import { toast } from "react-toastify";
import { CHAT_REQUEST } from "../constant/user.constants";
import { chatAPI } from "../apis/user.api";
import { chatFailure, chatSuccess } from "../actions/user.actions";

function* handleChat(action) {
    try {
        const res = yield call(chatAPI, action.payload);
        toast.success(res.message);
        yield put(chatSuccess(res.message));
    } catch (error) {
        toast.error(error.response.data.message)
        yield put(chatFailure(error?.response?.data?.message));
    }
}

export default function* userSaga() {
    yield takeLatest(CHAT_REQUEST, handleChat);
}