import React from 'react';
import './MyPostContainer.css';
import {Post,} from "./Post/Post";
import {StoreType} from "../../../redux/store";
import {BlockContainer} from "./Block/BlockContainer";

type MyPostPropsType = {
    data: StoreType,
}

export const MyPostContainer: React.FC<MyPostPropsType> = ({data}) => {

    let postElement = data.getState().profilePage.posts.map(e => <Post id={e.id} message={e.message} count={e.count}/>)
    return (
        <div className='content'>
            <h2 className="title">My posts</h2>
            <BlockContainer
                // data={data}
            />
            <div>{postElement}</div>
        </div>
    )
}