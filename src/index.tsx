import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state, subscribe,} from './redux/state'
import {RootStateType} from "./redux/state";


let renderedComponent = (state: RootStateType) => {
    ReactDOM.render(

        <App state={state}
                        /* addPost={addPost}
                         addMessage={addMessage}
                         updateNewPost={updateNewPost}
                         updateMessage={updateMessage}*/
    />, document.getElementById('root'));
}

renderedComponent(state)
subscribe(renderedComponent)

