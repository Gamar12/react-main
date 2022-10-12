import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateProps = (state) => {
    return {
        friends: state.navBarPage.friendsTab
    }
}

const NavbarContainer = connect(mapStateProps)(Navbar)

export default NavbarContainer;