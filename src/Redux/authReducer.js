import {authorized} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        default :
            return state
    }
}

//Action-creators:

export let setUserData = (userId,email,login, isAuth) => {
    return { type: SET_USER_DATA, data: {userId, email, login, isAuth} }
}


// Thunks:

export const authorizedUserThunk = () => (dispatch) => {
    return authorized.authorizedUser()
        .then(resp => {
            if (resp.resultCode === 0) {
                let {id, email, login} = resp.data
                dispatch(setUserData(id, email, login, true))
            }

        })
}

export const loginUserThunk = (formData) => (dispatch) => {
    authorized.login(formData).then(resp => {
        if (resp.resultCode === 0) {
            dispatch(authorizedUserThunk())
        }else {
            dispatch(stopSubmit('login', {_error: resp.messages[0]}))
        }
    })
}

export const logoutUserThunk = () => (dispatch) => {
    authorized.logout().then(resp => {
        if (resp.resultCode === 0) {
            dispatch(setUserData(null,null,null,false))
        }
    })
}

export default authReducer;
