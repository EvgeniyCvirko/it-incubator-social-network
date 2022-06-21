import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {Footer} from "./components/Footer/Footer";
import { Route,} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavContainer} from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";


export const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavContainer />
            <div className='content'>
                <Route path='/Message' render={() => <DialogsContainer/>}/>
                <Route path='/Profile' render={() => <ProfileContainer />}/>
                <Route path='/Users' render={() => <UsersContainer />}/>
            </div>
            <Footer/>
        </div>
    )
}

