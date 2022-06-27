import React from 'react';
import './App.css';
import ProfileContainer from "./components/ProfilePage/ProfileContainer";
import {Footer} from "./components/Footer/Footer";
import { Route,} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavContainer} from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


export const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavContainer />
            <div className='content'>
                <Route path='/Message' render={() => <DialogsContainer/>}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/Users' render={() => <UsersContainer />}/>
            </div>
            <Footer/>
        </div>
    )
}

