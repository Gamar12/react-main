import React from "react";
import {Redirect} from "react-router";

export const redirectToLogin = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.auth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

    return RedirectComponent
}