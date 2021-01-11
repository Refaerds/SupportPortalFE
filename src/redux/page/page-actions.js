import { 
    SET_ALERT, 
    RESET_ALERT, 
    CHANGE_ROUTE, 
    CHANGE_PROFILE_ROUTE, 
} from '../constants';

export const setAlert = (alertType, alertMessage) => (dispatch, getState) => {
    dispatch({
        type: SET_ALERT,
        payload: { alertType, alertMessage } 
    });
    setTimeout(() => {
        if (getState().page.alertType === alertType) {
            dispatch(resetAlert())
        }
    }, 8000)
}

export const resetAlert = () => ({
    type: RESET_ALERT,
    payload: null
})

export const handleRouteChange = (route, signedIn) => (dispatch) => {
    dispatch({
        type: CHANGE_ROUTE,
        payload: {
            route, 
            signedIn
        }
    })
}

export const handleProfileRouteChange = (profile_route) => ({
    type: CHANGE_PROFILE_ROUTE,
    payload: profile_route
})