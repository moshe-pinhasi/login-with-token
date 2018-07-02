import { ACTIONS_TYPES } from '../actions/types'

export default function(state = {}, action) {
    switch(action.type) {
        case ACTIONS_TYPES.AUTH_LOGIN:
            return {...state, error: '', authenticated: true}
        case ACTIONS_TYPES.AUTH_SIGNUP:
            return {...state, error: '', authenticated: true}
        case ACTIONS_TYPES.AUTH_LOGOUT:
            return {...state, error: '', authenticated: false}
        case ACTIONS_TYPES.AUTH_ERROR:
            return {...state, error: action.payload, authenticated: false}
        case ACTIONS_TYPES.FETCH_MESSAGE:
            return { ...state, message: action.payload };
        default:
            return state;
  }
}