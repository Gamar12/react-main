import React from 'react';
import {Field} from "redux-form";
import {Input} from "../FormsControl/FormsConctrol";
import {createMaxLengthValidator, requiredFields} from "../../../utils/validates";
import styles from '../../UI/FormsControl/FormsConctrol.module.css'
import {ownCreateFiled} from "../FormsControl/FormsConctrol";

let maxLength10 = createMaxLengthValidator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {ownCreateFiled("email", Input, [requiredFields, maxLength10], "email", "Email: ", null)}
            {ownCreateFiled("password", Input, [requiredFields, maxLength10], "password", "Password: ", {type: 'password'})}
            {ownCreateFiled("rememberMe", "input", [], null, 'Captcha- remember me: ', {type: 'checkbox'},)}
            {props.error && <div className={styles.err}>
                <div>{props.error}</div>
            </div>}
            <div>
                <button
                    onClick={props.handleSubmit}
                    name='login'
                    title={'Login'}
                    placeholder='Button'
                    type={"button"}
                >Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;