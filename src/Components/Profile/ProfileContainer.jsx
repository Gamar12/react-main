import React from 'react';
import Profile from "./Profile";
import {
    changeTextPost, setUserProfileInfo, getProfileInfo,
    getProfileStatus, setChangeProfileStatus, createPost, deletePost
} from "../../Redux/profilePageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let currentUserId = this.props.match.params.id ? this.props.match.params.id : this.props.userId
        if (currentUserId) {
            this.props.getProfileInfo(currentUserId);
            this.props.getProfileStatus(currentUserId);
        }else {
            this.props.history.push('/login')
        }
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        postsProps: state.profilePage.posts,
        updText: state.profilePage.updateTextPost,
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.profileStatus,
        auth: state.auth.isAuth,
        userId: state.auth.userId
    }
}


export default compose(
    connect(mapStateToProps, {createPost, changeTextPost, setUserProfileInfo, getProfileInfo,
        getProfileStatus, setChangeProfileStatus, deletePost}),
    withRouter,
    // redirectToLogin,
)(ProfileContainer)
