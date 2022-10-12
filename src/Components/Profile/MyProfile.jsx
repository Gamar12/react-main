import React from "react";
import prof from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const MyProfile = (props) => {
    return (
        <div>
            <div>
                <img className={prof.img} src={props.profileInfo?.photos.small}/>
            </div>
            <div>
                <ProfileStatusWithHooks status={props.status} changeStatus={props.setChangeProfileStatus}/>
            </div>
            <div className={prof.about}>+
                <div>About me: {props.profileInfo?.aboutMe}</div>
                <div>Full name: {props.profileInfo?.fullName}</div>
            </div>
        </div>
    )
}

export default MyProfile