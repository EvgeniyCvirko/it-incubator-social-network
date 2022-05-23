import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route,} from "react-router-dom";
import { StoreType,} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: StoreType,

}

export const App: React.FC<AppPropsType> = ({state,}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav state={state.getState().sideBar}/>
            <div className='content'>
                <Route path='/Message' render={() => <DialogsContainer data={state}/>
                }/>
                <Route path='/Profile' render={() => <Profile data={state} />
                }/>
            </div>
            <Footer/>
        </div>
    )
}

