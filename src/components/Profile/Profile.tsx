import React from 'react';
import './Profile.css';
import {Header} from './Header/Header';
import {MyPost,} from "./MyPost/MyPost";
import {Data} from "./Data/Data";
import { ProfilePageType,} from "../../redux/state";

 type ProfilePropsType={
     data:ProfilePageType,
     addPost: (post: string )=> void,
     updateNewPost: (newText : string) => void
 }
export const Profile = (props:ProfilePropsType) =>{
    return(
        <div >
            <Header />
            <Data />
            <MyPost data={props.data}
                    addPost={props.addPost}
                    updateNewPost={props.updateNewPost}
            />
        </div>
    )
}
