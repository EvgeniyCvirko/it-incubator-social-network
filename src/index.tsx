import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux_store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App  />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));


// for own store
/*let renderedEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

renderedEntireTree()*/

/*store.subscribe(() => {
    renderedEntireTree()
})*/


