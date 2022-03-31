import React from 'react';
import './Profile.css';
import {Header} from './Header/Header';
import {MyPost} from "./MyPost/MyPost";
import {Data} from "./Data/Data";

export const Profile = () =>{
    return(
        <div className='content'>
            <Header />
            <Data />
            <MyPost />
        </div>
    )
}
