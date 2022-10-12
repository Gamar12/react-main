import React from "react";
import u from './User.module.css'
import userNotFound from '../../assets/images/userNotFound.jpeg'
import {NavLink} from "react-router-dom";
import User from "./User";
import Paginator from "../UI/Paginator/Paginator";

const Users = (props) => {

    let followRequestOnServer = (userId) => {
        props.followUserThunk(userId)
    }

    let unFollowRequestOnServer = (userId) => {
        props.unFollowUserThunk(userId);
    }

    return <div>
        <Paginator {...props}/>
        {props.users.map(user => <User id={user.id} user={user} img={user.img} name={user.name} followed={props.followed}
                                       isFollowing={props.isFollowing} unFollowRequestOnServer={unFollowRequestOnServer}
                                       followRequestOnServer={followRequestOnServer}/>
        )}
        </div>
}

export default Users