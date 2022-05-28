import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {Footer} from "./components/Footer/Footer";
import { Route,} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavContainer} from "./components/Nav/NavContainer";

/*type AppPropsType = {
    state: Store<AppStateType>

}*/

export const App = () => {
    // const  { profilePage, dialogsPage, sideBar}  = state.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavContainer />
            <div className='content'>
                <Route path='/Message' render={() => <DialogsContainer
                    // data={state}
                />
                }/>
                <Route path='/Profile' render={() => <ProfileContainer />
                }/>
            </div>
            <Footer/>
        </div>
    )
}

