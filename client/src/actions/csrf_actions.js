import { csrfConstants } from "../constants/csrf_constants";
import { userConstants } from "../constants/user_constants";

export const restoreCSRF = () => async (dispatch) => {
    const response = await fetch("/api/session/csrf/restore", {
        method: "GET",
        credentials: "include",
    });
    if (response.ok) {
        const authData = await response.json();
        if (authData.csrf_token) {
            dispatch(setCSRF(authData.csrf_token));
        }
        if (authData.current_user) {
            //   Change to set current user dispatch call
            dispatch(restore(authData.current_user));
        }
    }
};


const restore = (user) => ({
    type: userConstants.LOGIN_SUCCESS,
    user,
});

const setCSRF = (csrfToken) => ({
    type: csrfConstants.SET_CSRF_TOKEN,
    csrfToken,
});
