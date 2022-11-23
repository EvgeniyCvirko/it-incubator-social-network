import React from 'react';
import './MyPostContainer.css';
import {Post,} from "./Post/Post";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {PostsType} from '../../../types/types';

type MyPostPropsType = {
    items: Array<PostsType>
}

export const MyPost = (props: MyPostPropsType) => {

    return (
        <div className='content'>
            <h2 className="title">My posts</h2>
            <AddPostContainer
            />
            <div>{props.items.map(e => <div key={e.id}>
                <Post id={e.id} message={e.message} count={e.count}/>
            </div>)}
            </div>
        </div>
    )
}