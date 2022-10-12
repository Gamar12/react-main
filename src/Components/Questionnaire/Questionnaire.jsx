import React from 'react';
import {reduxForm} from "redux-form";
import QuestionnaireForm from "../UI/Forms/QuestionnaireForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {redirectToLogin} from "../../HOC/redirectToLogin";

const ReduxQuestionnaireForm = reduxForm({
    form: 'questionnaire'
})(QuestionnaireForm)

const Questionnaire = () => {
    return (
        <div>
            <ReduxQuestionnaireForm/>
        </div>
    );
};

const mapStateToProps = (state) => ({auth: state.auth.isAuth})

export default compose(
    connect(mapStateToProps,{}),
    redirectToLogin
)(Questionnaire)