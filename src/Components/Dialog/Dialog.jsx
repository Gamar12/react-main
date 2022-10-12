import React from 'react';
import dl from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import DialogForm from "../UI/Forms/DialogForm";
import {reduxForm} from "redux-form";

const DialogItems = (props) => {

    return (
        <div className={dl.dialog}>
            <img src={props.img}/>
            <NavLink to={props.pathName} className={dl.navlink}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return <div>{props.message}</div>
}

const ReduxDialogForm = reduxForm({
    form: 'dialog'
})(DialogForm)

const Dialog = (props) => {
    let dialogsUser = props.storeDialogs.map((item, id) => (
        <DialogItems name={item.name} pathName={item.pathName} img={item.img} key={id}/>));
    let messges = props.storeMessages.map((msg, id) => (<Messages message={msg.message} key={id}/>));

    const sendNewMessage = (newMessage) => {
        console.log("newMessage",newMessage)
        props.createNewDialog(newMessage);
    }

    return (
        <div className={dl.dialogs}>

            <div className={dl.dialogsItems}>
                {dialogsUser}
            </div>
            <div className={dl.messages}>
                <div>
                    <ReduxDialogForm onSubmit={sendNewMessage}/>
                </div>
                <div >
                    {messges}
                </div>
            </div>
        </div>
    );
};

export default Dialog;