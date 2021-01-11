import { LOAD_USER, RESET_USER } from '../constants';

const initial_state = {
    currentUser: {}
}

const userReducer = (state = initial_state, action = {}) => {
    switch(action.type) {
        case LOAD_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case RESET_USER:
            return {
                ...state,
                ...initial_state
            }
        default:
            return state;
    }
}

export default userReducer;