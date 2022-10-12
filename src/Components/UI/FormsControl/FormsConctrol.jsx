import React from 'react';
import style from './FormsConctrol.module.css'
import {Field} from "redux-form";

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={style}>
            <input {...input} {...props}/>
            {hasError &&
            <div className={style.err}>
                <span >{meta.error}</span>
            </div>  }
        </div>
    );
};

export const Button = ({ button, meta, ...props }) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={style}>

            <button disabled={hasError} {...button} {...props} > Create post </button>
        </div>
    );
};

export const ownCreateFiled = (name, component, validate, placeholder, labelName, props = {} ) => {
    return <div>
        <label>{labelName}</label>
        <Field name={name} component={component} validate={validate}  placeholder={placeholder} {...props} />
    </div>

}
