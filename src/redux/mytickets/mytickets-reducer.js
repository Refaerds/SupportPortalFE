import { 
    GET_TICKETS_PENDING, 
    GET_TICKETS_SUCCESS, 
    GET_TICKETS_FAILED 
} from '../constants';

const initial_state = {
    tickets: [],
    tickets_status_pending: false //add a loader
}

const myticketsReducer = (state = initial_state, action = {}) => {
    switch(action.type) {
        case GET_TICKETS_PENDING:
            return {
                ...state,
                tickets_status_pending: true
            }
        case GET_TICKETS_SUCCESS:
            return {
                ...state,
                tickets_status_pending: false,
                tickets: action.payload
            }
        case GET_TICKETS_FAILED:
            return {
                ...state,
                tickets_status_pending: false,
                tickets: null
            }
        default:
            return state;
    }
}

export default myticketsReducer;