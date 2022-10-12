import {NavLink} from "react-router-dom";
import u from "./User.module.css";
import userNotFound from "../../assets/images/userNotFound.jpeg";
import React from "react";


const User = ({id, user, img, name, followed, isFollowing, unFollowRequestOnServer, followRequestOnServer}) => {
    return (
        <div key={id}>
                <span>
                    <div>
                        <NavLink to={'profile/' + id}>
                            <img className={u.img} src={img ? img : userNotFound}/>
                        </NavLink>
                    </div>
                    <div>
                        User-name: {name}
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button disabled={isFollowing.some(id => id === user.id)} onClick={() => unFollowRequestOnServer(id)}>Unfollow</button>
                                : <button disabled={isFollowing.some(id => id === user.id)} onClick={() => followRequestOnServer(id)}>Follow</button>
                        }
                    </div>
                </span>


        </div>
    )
}

export default User;