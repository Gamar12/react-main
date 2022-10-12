import React from 'react';
import frndStyle from './Friends.module.css'


const Friends = (props) => {
    return (
        <div className={frndStyle.friends_main} >
            <img  src={props.avatar}/>
            <br/>
           <div>{props.friend}</div>
        </div>
    );
};

export default Friends;