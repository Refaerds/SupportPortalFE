import { 
    GET_TICKETS_PENDING, 
    GET_TICKETS_SUCCESS, 
    GET_TICKETS_FAILED
} from '../constants';
import { setAlert } from '../page/page-actions';
import { getticketsURL } from '../../urls';

export const getTickets = () => (dispatch, getState) => {
    const { user } = getState();

    dispatch({ type: GET_TICKETS_PENDING });
    fetch(`${getticketsURL}${user.currentUser.id}`)
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                dispatch(setAlert('error', response.message));
                dispatch({
                    type: GET_TICKETS_FAILED
                })
            }
            else {
                dispatch({
                    type: GET_TICKETS_SUCCESS,
                    payload: response
                })
            }
        })
        .catch(err => {
            dispatch({
                type: GET_TICKETS_FAILED
            });
            dispatch(setAlert('error', "Unable to make a request, please try again later or contact site support"))
        }) 
}