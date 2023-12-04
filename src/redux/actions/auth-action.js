import { AUTH, AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT } from "./index";
import axios from '../../services/index'

const auth = (user) => {
    return {
        type: AUTH,
        payload: {
            user
        }
    }
}

const auth_loading = () => {
    return {
        type: AUTH_LOADING
    }
}

const auth_error = (message) => {
    return {
        type: AUTH_ERROR,
        payload: {
            message
        }
    }
}

const auth_logout = () => {
    return {
        type: AUTH_LOGOUT
    }
}

const register = USER => async dispatch => {
    dispatch(auth_loading())
    axios.post('/users', USER)
        .then(response => {
            if(response.status === 201){
                dispatch(auth(response.data))
            }
        })
        .catch(err => {
            dispatch(auth_error(err.response.data.message))
        })
}

export default register