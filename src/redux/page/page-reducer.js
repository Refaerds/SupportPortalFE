import { 
    SET_ALERT, 
    RESET_ALERT, 
    CHANGE_ROUTE, 
    CHANGE_PROFILE_ROUTE, 
} from '../constants';

const initial_state = {
    route: 'home',
    profile_route: 'myaccount',
    isSignedIn: false,
    alertMessage: '',
    alertType: '',
    faqs: []
}

const pageReducer = (state = initial_state, action = {}) => {
    switch(action.type) {
        case SET_ALERT:
            return {
                ...state,
                alertMessage: action.payload.alertMessage, 
                alertType: action.payload.alertType
            }
        case RESET_ALERT:
            return {
                ...state,
                alertMessage: '', 
                alertType: ''
            }
        case CHANGE_ROUTE:
            if (action.payload.signedIn === false) {
                return {
                    ...state,
                    ...initial_state
                }
            }
            else {
                if (action.payload.signedIn !== undefined) {
                    return {
                        ...state,
                        isSignedIn: action.payload.signedIn,
                        route: action.payload.route, 
                        alertMessage: '', 
                        alertType: ''
                    }
                }
                else {
                    return {
                        ...state,
                        route: action.payload.route, 
                        alertMessage: '', 
                        alertType: ''
                    }
                }
            }
        case CHANGE_PROFILE_ROUTE:
            return {
                ...state,
                profile_route: action.payload,
            }
        default:
            return state;
    }
}

export default pageReducer;