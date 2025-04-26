import { REGISTER_SUCCESS } from "../constant/auth.constants";
import { createSelector } from "reselect";

const selectAuthState = state => state.auth;

export const selectCurrentUser = createSelector(
    [selectAuthState],
    auth => auth.user
);

export const selectMeLoading = createSelector(
    [selectAuthState],
    auth => auth.meLoading
);

export const selectAuthLoading = createSelector(
    [selectAuthState],
    auth => auth.loading
);

export const selectAuthError = createSelector(
    [selectAuthState],
    auth => auth.error
);

export const selectRegisterSuccess = createSelector(
    [selectAuthState],
    auth => auth.success === REGISTER_SUCCESS
);