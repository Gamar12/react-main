import {authorizedUserThunk} from "./authReducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    isInitialized: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }

        default :
            return state
    }
}

export const initializedSuccessAC = () => ({type: INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promiseAuthorized = dispatch(authorizedUserThunk());
    Promise.all([promiseAuthorized]).then(() => {
        dispatch(initializedSuccessAC())
    })
}

export default appReducer;


