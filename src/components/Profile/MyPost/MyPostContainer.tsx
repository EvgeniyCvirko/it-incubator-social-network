import React from 'react';
import './MyPost.css';
import {Block} from './Block/Block'
import {Post,} from "./Post/Post";
import {StoreType} from "../../../redux/store";
import {BlockContainer} from "./Block/BlockContainer";
import {MyPost} from "./MyPost";

type MyPostPropsType = {
    data: StoreType,
}

export const MyPostContainer: React.FC<MyPostPropsType> = ({data}) => {

    let postElement = data.getState().profilePage.posts.map(e => <Post id={e.id} message={e.message} count={e.count}/>)
    return (
        <div className='content'>
            <h2 className="title">My posts</h2>
            <BlockContainer data={data}
                // newPostText={data.getState().profilePage.newPostText}
                // dispatch={data.dispatch.bind(data)}

            />
            {/*<Post posts={data.getState().profilePage.posts}/>*/}
            <div>{postElement}</div>
        </div>
    )
}