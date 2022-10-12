import React from 'react';
import {Field} from "redux-form";
import {createMaxLengthValidator, requiredFields} from "../../../utils/validates";
import {Input} from "../FormsControl/FormsConctrol";

const maxLength10 = createMaxLengthValidator(10);

const DialogForm = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <Field component={Input}
                   name={'dialogtext'}
                   placeholder={"Input text"}
                   label={'message'}
                   validate={[requiredFields, maxLength10]}
            />
            <button>Send message</button>
        </form>
    );
};

export default DialogForm;