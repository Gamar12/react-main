import React from "react";
import LoginForm from "../UI/Forms/LoginForm";
import { reduxForm } from 'redux-form'
import {loginUserThunk} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const LoginReduxFrom = reduxForm({
    form: "login"
})(LoginForm)

const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        props.loginUserThunk(formData)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>
    return ( <LoginReduxFrom  onSubmit={onSubmit} /> )
}

const mapStateToProps = (store) => {
    return {
        isAuth: store.auth.isAuth
    }
}

export default connect(mapStateToProps,{loginUserThunk})(LoginContainer);

