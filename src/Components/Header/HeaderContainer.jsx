import React from 'react';
import Header from "./Header";
import {authorizedUserThunk, logoutUserThunk} from "../../Redux/authReducer";
import {connect} from "react-redux";


class HeaderComponent extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};
export default connect(mapStateToProps, {authorizedUserThunk, logoutUserThunk})(HeaderComponent)