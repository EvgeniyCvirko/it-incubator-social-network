import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, updateNewPost} from './redux/state'
import {RootStateType} from "./redux/state";

/*type renderedComponentsType = {
    state:RootStateType
}*/

export const renderedComponent = (props: RootStateType) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPost={updateNewPost}
    />, document.getElementById('root'));
}