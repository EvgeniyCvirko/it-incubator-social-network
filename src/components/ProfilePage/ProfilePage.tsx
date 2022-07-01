import React from 'react';
import './Profile.css';
import {Header} from './Header/Header';
import {Profile} from "./Profile/Profile";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileType} from "../../redux/ProfilePageReducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfilePage = (props:ProfilePropsType) =>{
    return(
        <div >
            <Header />
            <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer  />
        </div>
    )
}
