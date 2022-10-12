import React from 'react';
import {Field} from "redux-form";
import {Input} from "../FormsControl/FormsConctrol";
import {createMaxLengthValidator, requiredFields} from "../../../utils/validates";

let maxLength10 = createMaxLengthValidator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    validate={[requiredFields,maxLength10]}
                    name={'description'}
                    placeholder={'Input text'}
                />
            </div>
            <div>
                <button>Create post</button>
            </div>
        </form>
    );
};

export default PostForm;