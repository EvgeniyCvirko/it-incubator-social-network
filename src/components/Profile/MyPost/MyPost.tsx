import React from 'react';
import './MyPost.css';
import {Block} from './Block/Block'
import {Post,} from "./Post/Post";
import { StoreType} from "../../../redux/store";

type MyPostPropsType={
    data:  StoreType,
}

export const MyPost : React.FC<MyPostPropsType> = ({data }) =>{

    let postElement = data.getState().profilePage.posts.map(e => <Post id={e.id} message= {e.message} count={e.count}/>)
    // @ts-ignore
    // @ts-ignore
    return(
        <div className='content'>
            <h2 className="title">My posts</h2>
            <Block  newPostText={data.getState().profilePage.newPostText}
                    dispatch={data.dispatch.bind(data)}

            />
            <div >{postElement}</div>
        </div>
    )
}