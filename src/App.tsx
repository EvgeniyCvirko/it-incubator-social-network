import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='content'>
                    <Route path='/Dialogs' component={Dialogs} />
                    <Route path='/Profile' component={Profile} />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};

export default App;
