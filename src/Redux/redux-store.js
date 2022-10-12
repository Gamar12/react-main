import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import navBarPageReducer from "./navBarPage";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";

//Create new pack of reducers with help "combineReducers" method, and send it createStore
let reducers = combineReducers({
    dialogPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    navBarPage: navBarPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

//Create store and set variable, get reducers
// let store = createStore(reducers, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));


window.store = store;

export default store;
