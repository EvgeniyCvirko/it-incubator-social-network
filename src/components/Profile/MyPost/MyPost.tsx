import React from 'react';
import './MyPost.css';
import {Block} from './Block/Block'
import {Post} from "./Post/Post";


export const MyPost = () =>{
    return(
        <div className='content'>
            <h2 className="title">My posts</h2>
            <Block />
            <Post />
        </div>
    )
}