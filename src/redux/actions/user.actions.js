import { CHAT_FAILURE, CHAT_REQUEST, CHAT_SUCCESS } from "../constant/user.constants"

export const chatRequest = body => ({
    type: CHAT_REQUEST,
    payload: body
})

export const chatSuccess = body => ({
    type: CHAT_SUCCESS,
    payload: body
})

export const chatFailure = body => ({
    type: CHAT_FAILURE,
    payload: body
})