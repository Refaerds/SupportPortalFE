import { 
    GET_FAQS_PENDING, 
    GET_FAQS_SUCCESS, 
    GET_FAQS_FAILED
} from '../constants';

const initial_state = {
    faqs: [],
    faqs_status_pending: false
}

const faqReducer = (state = initial_state, action = {}) => {
    switch(action.type) {
        case GET_FAQS_PENDING:
            return {
                ...state,
                faqs_status_pending: true
            }
        case GET_FAQS_SUCCESS:
            return {
                ...state,
                faqs_status_pending: false,
                faqs: action.payload
            }
        case GET_FAQS_FAILED:
            return {
                ...state,
                faqs_status_pending: false,
                faqs: null
            }
        default:
            return state;
    }
}

export default faqReducer;