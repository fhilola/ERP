import { AUTH, AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT } from "./index";
import axios from '../../services/index'
import {toast} from 'react-toastify'

const auth = (user, message) => {
    toast.success(message)
    return {
        type: AUTH,
        payload: {
            user,
            message
        }
    }
}

const auth_loading = (message) => {
    toast.warning(message)
    return {
        type: AUTH_LOADING,
        payload: {
            message
        }
    }
}

const auth_error = (message) => {
    toast.error(message)
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
    dispatch(auth_loading('Loading...'))
    axios.post('/users', USER)
        .then(response => {
            if(response.status === 201){
                dispatch(auth(response.data, 'Successfully registered'))
            }
        })
        .catch(err => {
            dispatch(auth_error(err.response.data.message))
        })
}

const login = USER => async dispatch => {
    axios.post('/users/login', USER)
    .then(response => {
        if(response.status === 200){
            dispatch(auth(response.data), 'Successfully loged in')
        }
    })
    .catch(err => {
        dispatch(auth_error(err.response.data.message))
    })
}

export { register, login}