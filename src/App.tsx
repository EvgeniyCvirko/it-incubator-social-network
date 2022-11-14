import React, {Suspense} from 'react';
import './App.css';
import ProfileContainer from "./components/ProfilePage/ProfileContainer";
import {Footer} from "./components/Footer/Footer";
import {Route, withRouter,} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {NavContainer} from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux_store";
import {compose} from "redux";
import {Loading} from "./components/common/Loading";
import {initialiseApp} from "./redux/AppReducer";
//types
type MapStateToPropsType ={
    initialised: boolean
}
type mapDispatchToPropsPropsType = {
    initialiseApp: () => void
}
type ComponentType = MapStateToPropsType & mapDispatchToPropsPropsType
//Component

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component< ComponentType,mapDispatchToPropsPropsType> {

    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if(!this.props.initialised){
             return <Loading/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavContainer/>
                <div className='content'>
                    <Route path='/message' render={() => <Suspense fallback={<div>Loading...</div>}>
                      <DialogsContainer/>
                    </Suspense>}/>
                  {/*<Route path='/message' render={() => <DialogsContainer/>}/>*/}
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps =(state: AppStateType):MapStateToPropsType =>{
    return {
        initialised: state.app.initialised
    }
}
const mapDispatchToProps = {initialiseApp}
export default compose<React.ComponentType>(
    withRouter,
    connect (mapStateToProps,mapDispatchToProps ))(App)

