import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    hiddenUsers,
    setCurrentPage,
    slicePagesManyUsers,
    changeIsFetchingForPreLoader,
    followingUser,
    getUsersThunk, changePage, followUserThunk, unFollowUserThunk,
} from "../../Redux/usersPageReducer";
import Preloader from "../UI/Loader/Preloader";

class UsersComponent extends React.Component{

    componentDidMount() {
        this.getUsers();
    }

    hiddenUsers = () => {
        this.props.hiddenUsers();
    }

    getUsers = () => {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSizeElement);
    }

    onChangePage = (currentPage) => {
        this.props.changePage(currentPage,this.props.pageSizeElement)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users
                users={this.props.users}
                totalElementForPage={this.props.totalElementForPage}
                pageSizeElement={this.props.pageSizeElement}
                onChangePage={this.onChangePage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                followingUser={this.props.followingUser}
                followUserThunk={this.props.followUserThunk}
                unFollowUserThunk={this.props.unFollowUserThunk}
            />
            }
        </>

    }
}


let mapStateToProps = (state) => {
    return {
        users:  state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSizeElement: state.usersPage.pageSizeElement,
        totalElementForPage: state.usersPage.totalElementForPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, hiddenUsers, setCurrentPage,
    slicePagesManyUsers, changeIsFetchingForPreLoader,
    followingUser, getUsersThunk,changePage, followUserThunk, unFollowUserThunk
})(UsersComponent);

export default UsersContainer