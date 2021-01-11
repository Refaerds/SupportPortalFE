import { LOAD_USER, RESET_USER } from '../constants';
import { setAlert, handleRouteChange } from '../page/page-actions';
import { updateprofileURL, signinURL, signupURL } from '../../urls';

export const loadUser = (user) => ({
    type: LOAD_USER,
    payload: user
})

export const signOut = () => ({
    type: RESET_USER
})

export const updateUser = (new_user) => (dispatch, getState) => {
    const { user } = getState();
    fetch(updateprofileURL, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            new_data: {
                email: new_user.email,
                pwd: new_user.new_pwd,
                name: new_user.name
            },
            old_data: {
                email: user.currentUser.email,
                pwd: new_user.pwd,
                name: user.currentUser.name
            }
        })
    })
    .then(response => response.json())
    .then(response => {
        if (response.id) {
            dispatch(loadUser(response));
            dispatch(setAlert('success', 'Your information has been changed'));
        }
        else if (response.error) {
            dispatch(setAlert('error', response.message))
        }
    })
    .catch(err => {
        dispatch(setAlert('error', "Unable to make a request, please try again later or contact site support"))
    })
}

export const signIn = (user) => (dispatch) => {
    fetch(signinURL, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: user.email,
            pwd: user.pwd
        })
    })
    .then(response => response.json())
    .then(response => {
        if (response.id) {
            dispatch(loadUser(response));
            dispatch(handleRouteChange('home', true));
        }
        else if (response.error) {
            dispatch(setAlert('error', response.message))
        }
    })
    .catch(err => {
        dispatch(setAlert('error', "Unable to make a request, please try again later or contact site support"))
    })
}

export const signUp = (user) => (dispatch) => {
    fetch(signupURL, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: user.email,
            pwd: user.pwd,
            name: user.name
        })
    })
    .then(response => response.json())
    .then(response => {
        if (response.id) {
            dispatch(loadUser(response));
            dispatch(handleRouteChange('home', true));
        }
        else if (response.error) {
            dispatch(setAlert('error', response.message))
        }
    })
    .catch(err => dispatch(setAlert('error', "Unable to make a request, please try again later or contact site support")))
}