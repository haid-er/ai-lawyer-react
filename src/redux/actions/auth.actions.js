import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    ME_REQUEST,
    ME_SUCCESS,
    ME_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

} from "../constant/auth.constants";

export const registerRequest = body => ({
    payload: body,
    type: REGISTER_REQUEST
})

export const registerSuccess = body => ({
    payload: body,
    type: REGISTER_SUCCESS,
})

export const registerFailure = body => ({
    payload: body,
    type: REGISTER_FAILURE,
})

export const loginRequest = body => ({
    payload: body,
    type: LOGIN_REQUEST,
})

export const loginSuccess = body => ({
    payload: body,
    type: LOGIN_SUCCESS,
})

export const loginFailure = body => ({
    payload: body,
    type: LOGIN_FAILURE,
})

export const meRequest = token => ({
    type: ME_REQUEST,
    payload: token,
})

export const meSuccess = body => ({
    type: ME_SUCCESS,
    payload: body,
})

export const meFailure = body => ({
    type: ME_FAILURE,
    payload: body
})

export const logout = _ => ({
    type: LOGOUT
})
