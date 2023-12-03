import { AUTH, AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT } from "../actions";

const initialState = {
    user: null,
    isloading: false,
    error: false,
    message: null,
    isloggedin: false
}

const authreducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH:
            return state
        default:
            return state
    }
}

export { authreducer }