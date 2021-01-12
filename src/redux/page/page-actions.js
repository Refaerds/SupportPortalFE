import { 
    SET_ALERT, 
    RESET_ALERT, 
    CHANGE_ROUTE, 
    CHANGE_PROFILE_ROUTE, 
} from '../constants';

let scheduleResetAlert = null;

export const setAlert = (alertType, alertMessage) => (dispatch, getState) => {
    dispatch({
        type: SET_ALERT,
        payload: { alertType, alertMessage } 
    });
    scheduleResetAlert = setTimeout(() => {
        if (getState().page.alertType === alertType) {
            dispatch(resetAlert())
        }
    }, 8000)
}

export const resetAlert = () => {
    clearTimeout(scheduleResetAlert);

    return {
        type: RESET_ALERT,
        payload: null
    }
}

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