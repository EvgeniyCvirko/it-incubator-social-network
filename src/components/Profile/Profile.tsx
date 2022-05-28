import React from 'react';
import './Profile.css';
import {Header} from './Header/Header';
import {Data} from "./Data/Data";
import {MyPostContainer} from "./MyPost/MyPostContainer";

export const Profile = () =>{
    return(
        <div >
            <Header />
            <Data />
            <MyPostContainer  />
        </div>
    )
}
