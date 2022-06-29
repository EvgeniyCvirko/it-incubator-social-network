import React from 'react';
import './App.css';
import ProfileContainer from "./components/ProfilePage/ProfileContainer";
import {Footer} from "./components/Footer/Footer";
import { Route,} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {NavContainer} from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


export const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavContainer />
            <div className='content'>
                <Route path='/message' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/login' render={() => <Login />}/>
            </div>
            <Footer/>
        </div>
    )
}

