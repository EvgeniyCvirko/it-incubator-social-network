import React from 'react';
import './MyPostContainer.css';
import {Post,} from "./Post/Post";
import {BlockContainer} from "./Block/BlockContainer";
import {PostsType} from "../../../redux/ProfilePageReducer";

type MyPostPropsType = {
    items: Array<PostsType>
}

export const MyPost = (props: MyPostPropsType) => {

    return (
        <div className='content'>
            <h2 className="title">My posts</h2>
            <BlockContainer
            />
            <div>{props.items.map(e => <div key={e.id}>
                <Post id={e.id} message={e.message} count={e.count}/>
            </div>)}
            </div>
        </div>
    )
}