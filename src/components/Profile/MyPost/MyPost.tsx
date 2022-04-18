import React from 'react';
import './MyPost.css';
import {Block} from './Block/Block'
import {Post, PostPropsType} from "./Post/Post";

export type MyPostPropsType = Array<PostPropsType>

export type postPropsType = {
    post:MyPostPropsType
}

export const MyPost = (props: postPropsType) =>{

    let postElement = props.post.map(e => <Post id={e.id} message= {e.message} count={e.count}/>)
    return(
        <div className='content'>
            <h2 className="title">My posts</h2>
            <Block />
            <div >{postElement}</div>
        </div>
    )
}