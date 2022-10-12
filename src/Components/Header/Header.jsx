import React from 'react';
import head from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={head.header}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
            <span>LOGO</span>
            <div className={head.auth_block}>
                {props.isAuth ?
                    <div className={head.login}>
                        <NavLink to='/profile'> Profile-name: {props.login.toUpperCase()}</NavLink>
                        <button onClick={props.logoutUserThunk}>Log-out</button>
                    </div>
                    :  <NavLink to={'/login'} > Login </NavLink> }
            </div>
        </header>
    );
};

export default Header;