import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom";
import {MessagesDataPropsType} from "./components/Dialogs/MessageItem/MessageItem";
import {DialogsDataPropsType} from "./components/Dialogs/DialogsItem/DialogsItem";
import {MyPostPropsType} from "./components/Profile/MyPost/MyPost";

type AppPropsType={
    messagesData: Array<MessagesDataPropsType>,
    dialogsData: Array<DialogsDataPropsType>,
    post: MyPostPropsType,
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='content'>
                    <Route path='/Dialogs' render={() => <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
                    <Route path='/Profile' render={() => <Profile post={props.post}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
