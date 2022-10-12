import React from 'react';
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {createLinkRoute} from "./UI/Links/RouteLink";

const Navbar = (props) => {
    return (
        <nav className={n.nav}>
            {createLinkRoute('/profile', true,'Profile')}
            {createLinkRoute('/dialog', null,'Messages')}
            {createLinkRoute('/questionnaire', null,'Questionnaire')}
            {createLinkRoute('/users', null,'Users')}
            {createLinkRoute('/news', null,'News')}
            {createLinkRoute('/music', null,'Music')}
            {createLinkRoute('/settings', null,'Settings')}
            <div>
                <hr/>
            </div>
            <div className={n.frnd}>
                <div className={n.test1}>Friends:</div>
                {props.friends.map(friend => {
                    return <Friends avatar={friend.avatar} friend={friend.friendName} key={friend.id}/>
                })
                }
            </div>
        </nav>
    );
};

export default Navbar;