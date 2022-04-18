import React from 'react';
import './Profile.css';
import {Header} from './Header/Header';
import {MyPost,  postPropsType} from "./MyPost/MyPost";
import {Data} from "./Data/Data";

export const Profile = (props:postPropsType) =>{
    return(
        <div >
            <Header />
            <Data />
            <MyPost post={props.post} />
        </div>
    )
}
