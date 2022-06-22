import React from 'react';
import './MyPostContainer.css';
import {Post,} from "./Post/Post";
import {BlockContainer} from "./Block/BlockContainer";
import {PostsType} from "../../../redux/ProfilePageReducer";

type MyPostPropsType = {
    items: Array<PostsType>
}

export const MyPost = (props: MyPostPropsType) => {

    let postElement = props.items.map(e => <Post id={e.id} message={e.message} count={e.count}/>)
    return (
        <div className='content'>
            <h2 className="title">My posts</h2>
            <BlockContainer
            />
            <div>{postElement}</div>
        </div>
    )
}