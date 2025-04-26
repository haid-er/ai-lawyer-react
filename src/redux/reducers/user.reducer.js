import { CHAT_FAILURE, CHAT_REQUEST, CHAT_SUCCESS } from "../constant/user.constants";

const initialState = {
    userHistory: null,
    chat: {
        chatResponse: "Hello! How can I help you today!",
        chatError: null,
        chatSuccess: null,
        chatLoading: false,

    },
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHAT_REQUEST:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    chatError: null,
                    chatSuccess: null,
                    chatLoading: true,
                }
            }
        case CHAT_FAILURE:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    chatResponse: "Sorry! There is a problem on our end",
                    chatError: action.payload,
                    chatSuccess: CHAT_FAILURE,
                    chatLoading: false,
                }
            }
        case CHAT_SUCCESS:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    chatResponse: action.payload,
                    chatError: null,
                    chatSuccess: CHAT_SUCCESS,
                    chatLoading: false,
                },
            }

        default:
            return state;
    }
}

export default userReducer;