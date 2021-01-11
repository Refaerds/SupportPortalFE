import { 
    GET_FAQS_PENDING, 
    GET_FAQS_SUCCESS, 
    GET_FAQS_FAILED 
} from '../constants';
import { setAlert } from '../page/page-actions';
import { getfaqsURL } from '../../urls.js';

export const getFAQs = () => (dispatch, getState) => {
    const { faq } = getState();

    if (!faq.faqs || !faq.faqs.length) {
        dispatch({ type: GET_FAQS_PENDING });
        fetch(getfaqsURL)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    dispatch(setAlert('error', response.message));
                    dispatch({type: GET_FAQS_FAILED})
                }
                else {
                    dispatch({
                        type: GET_FAQS_SUCCESS,
                        payload: response
                    })
                }
            })
            .catch(err => {
                dispatch({type: GET_FAQS_FAILED});
                dispatch(setAlert('error', "Unable to get FAQs, please try again later or contact site support"));
            })
    }
}