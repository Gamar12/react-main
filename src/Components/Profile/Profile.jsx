import React from 'react';
import prof from './Profile.module.css'
import MyProfile from "./MyProfile";
import MyPosts from "./MyPosts";

const Profile = (props) => {
    return (
        <div className={prof.content}>
            <MyProfile
                {...props}
            />
            <hr/>
            <MyPosts
                {...props}
            />
        </div>
    );
};

export default Profile;