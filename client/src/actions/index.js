import {ACTIONS_TYPES} from './types'

import authService from '../services/authService'

export function loginUser(email, password, callback) {
    return dispatch => {
        authService
            .login({email, password})
            .then(res => {
                dispatch({ type: ACTIONS_TYPES.AUTH_LOGIN })
                localStorage.setItem('token', res.token)
                callback()
            })
            .catch(err => {
                dispatch(errorHandler('Could not login'))
            })
    }
}

export function signupUser(email, password, callback) {
    return dispatch => {
        authService
            .signup({email, password})
            .then(res => {
                dispatch({ type: ACTIONS_TYPES.AUTH_SIGNUP })
                localStorage.setItem('token', res.token)
                callback()
            })
            .catch(err => {
                dispatch(errorHandler('Could not signup'))
            })
    }
}

export function logoutUser() {

    return dispatch => {
        authService
            .logout()
            .then(res => {
                localStorage.removeItem('token')
                dispatch({ type: ACTIONS_TYPES.AUTH_LOGOUT })
            })
            .catch(err => {
                dispatch(errorHandler('Could not logged out'))
            })
    };
}

function errorHandler(error) {
    return {
        type: ACTIONS_TYPES.AUTH_ERROR,
        payload: error
    }
}

export function fetchMessage() {

    return dispatch => {
        authService
            .fetchMessage()
            .then(res => {
                dispatch({
                    type: ACTIONS_TYPES.FETCH_MESSAGE,
                    payload: res.message
                  });
            })
    };
}

