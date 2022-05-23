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
    return(
        <div className='content'>

            <div >{postElement}</div>
        </div>
    )
}