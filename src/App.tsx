import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType={
    state: RootStateType,
    addPost: (post: string)=> void,
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sideBar} />
                <div className='content'>
                    <Route path='/Message' render={() => <Dialogs data={props.state.dialogsPage}/>}/>
                    <Route path='/Profile' render={() => <Profile data={props.state.profilePage}
                                                                  addPost={props.addPost}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
