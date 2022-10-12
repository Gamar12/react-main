import React from 'react';
import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Answer 1: </label>
                <Field
                    name="answer1"
                    component="input"
                    placeholder="answer1"
                />
            </div>
            <div>
                <label>Answer 2: </label>
                <Field
                    name="answer2"
                    component="input"
                    placeholder="answer2"
                />
            </div>
            <div>
                <label>Answer 3: </label>
                <Field
                    name="answer3"
                    component="input"
                    placeholder="answer3"
                />
            </div>
            <div>
                <button >Send answer this question</button>
            </div>
        </form>
    );
};

export default LoginForm;