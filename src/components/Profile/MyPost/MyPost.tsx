import React from 'react';
import './MyPost.css';
import {Block} from './Block/Block'
import {Post} from "./Post/Post";


export const MyPost = () =>{
    return(
        <div className='content'>
            <h2 className="title">My posts</h2>
            <Block />
            <Post message='Hey, why nobody love me?'
                  count ={5}  />
            <Post message='I want to be Front-end-Developer!!! '
                  count ={500}  />
        </div>
    )
}