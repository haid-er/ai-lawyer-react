import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    ME_REQUEST,
    ME_SUCCESS,
    ME_FAILURE,
} from "../constant/auth.constants";

const initialState = {
    user: null,
    error: null,
    success: null,
    loading: false,
    meLoading: true,
    token: null,
}

export default authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                success: null,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                success: REGISTER_SUCCESS,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false,

            }
        case LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
                success: null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                success: LOGIN_SUCCESS,
                loading: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
                success: null,
                loading: false,
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
            }
        case ME_REQUEST:
            return {
                ...state,
                user: null,
                meLoading: true,
                error: null,
                success: null,
            }
        case ME_SUCCESS:
            return {
                ...state,
                user: action.payload,
                meLoading: false,
                error: null,
                success: ME_SUCCESS,
            }
        case ME_FAILURE:
            return {
                ...state,
                meLoading: false,
                user: null,
                error: action.payload,
                success: false,
            }
        default:
            return state;
    }
}