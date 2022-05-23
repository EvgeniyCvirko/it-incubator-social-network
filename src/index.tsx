import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from "./redux/redux_store";
import {BrowserRouter} from "react-router-dom";


let renderedComponent = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store}
        /></BrowserRouter>,
        document.getElementById('root'));
}

renderedComponent()
store.subscribe(renderedComponent)

