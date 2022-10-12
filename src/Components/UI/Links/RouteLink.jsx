import n from '../../Navbar.module.css'
import {NavLink} from "react-router-dom";

export const createLinkRoute = (redirectTo, exact, propsText) => {
    return <div className={n.item}>
        <NavLink to={redirectTo} exact={exact}>{propsText}</NavLink>
    </div>
}