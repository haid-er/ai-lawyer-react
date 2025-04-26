import { } from "../constant/auth.constants";
import { createSelector } from "reselect";

const selectUserState = state => state.user;

export const selectChatLoading = createSelector(
    [selectUserState],
    user => user.chat.chatLoading
);

export const selectChatResponse = createSelector(
    [selectUserState],
    user => user.chat.chatResponse
)
