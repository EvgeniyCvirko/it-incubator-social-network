import React from 'react';
import './MyPost.css';
import {Block} from './Block/Block'
import {Post,} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostPropsType={
    post:  Array<PostsType>,
}

export const MyPost = (props: MyPostPropsType) =>{

    let postElement = props.post.map(e => <Post id={e.id} message= {e.message} count={e.count}/>)
    return(
        <div className='content'>
            <h2 className="title">My posts</h2>
            <Block />
            <div >{postElement}</div>
        </div>
    )
}