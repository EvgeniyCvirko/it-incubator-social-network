import React from 'react';
import './MyPost.css';
import {Block} from './Block/Block'
import {Post,} from "./Post/Post";
import { ProfilePageType} from "../../../redux/state";

type MyPostPropsType={
    data:  ProfilePageType,
}

export const MyPost = (props: MyPostPropsType) =>{

    let postElement = props.data.posts.map(e => <Post id={e.id} message= {e.message} count={e.count}/>)
    return(
        <div className='content'>
            <h2 className="title">My posts</h2>
            <Block  data={props.data}
            />
            <div >{postElement}</div>
        </div>
    )
}