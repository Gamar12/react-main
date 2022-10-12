import React from 'react';
import {createNewDialogActionCreator} from "../../Redux/dialogsPageReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {redirectToLogin} from "../../HOC/redirectToLogin";
import {compose} from "redux";

let mapStateProps = (state) => {
    return {
        storeDialogs: state.dialogPage.dialogsArr,
        storeMessages: state.dialogPage.messages,
        inputTextDialog: state.dialogPage.inputTextDialog,
        auth: state.auth.isAuth
    }
}

let mapDispatchProps = (dispatch) => {
    return {
        createNewDialog: (newMessage) => {
            dispatch(createNewDialogActionCreator(newMessage))
        }
    }
}

const DialogContainer = compose(
    connect(mapStateProps, mapDispatchProps),
    redirectToLogin
)
(Dialog)

export default DialogContainer;