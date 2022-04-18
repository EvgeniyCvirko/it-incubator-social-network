import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {v1} from "uuid";

let posts = [
    {id: v1(), message: 'Hey, why nobody love me?', count: 100},
    {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
    {id: v1(), message: 'Ho-ho-ho', count: 0},
]
let dialogsData = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Victor'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Igor'},
    {id: 5, name: 'Anton'},
]

let messagesData = [
    {id: 1, message: 'Сказали , что материал по-прежнему густой , но в обработке ведёт себя прекрасно'},
    {id: 2, message: 'Помнишь к 7 на горского 56 острые козырьки?'},
    {id: 3, message: 'Ты завтра к Шире едешь?'},
    {id: 4, message: 'Да хз, завтра попиздим утром'},
    {id: 5, message: 'Знаешь, все будет хорошо!!!'},
]

ReactDOM.render(<App
    dialogsData={dialogsData}
    messagesData={messagesData}
    post={posts}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
