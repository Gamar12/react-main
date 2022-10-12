import React from "react";
import app from '././styles/App.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogContainer from "./Components/Dialog/DialogContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import NavbarContainer from "./Components/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderComponent from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import Questionnaire from "./Components/Questionnaire/Questionnaire";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./Components/UI/Loader/Preloader";
import lazyLoadingComponent from "./HOC/lazyLoadingComponent";

//Lazy-rendering
const DialogComponentLazy = React.lazy(() => import('./Components/Dialog/DialogContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className={app.appWrapper}>
                    <HeaderComponent/>
                    <NavbarContainer/>
                    <div className={app.content}>
                        <Route path="/profile/:id?" render={() => <ProfileContainer/>}
                        />
                        <Route path="/dialog" render={lazyLoadingComponent(<DialogComponentLazy />)}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/questionnaire" render={() => <Questionnaire/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <LoginContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized,
    }
}

export default compose(
    connect(mapStateToProps,{initializeApp}))(App);