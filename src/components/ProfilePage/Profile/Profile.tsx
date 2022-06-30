import React from 'react';
import './Profile.css';
import {Avatar} from "./Avatar/Avatar";
import {Description} from "./Discription/Description";
import {ProfileType} from "../../../redux/ProfilePageReducer";
import {Contacts} from "./Discription/Contacts/Contacts";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type DataPropsType = {
    profile: ProfileType
}

export const Profile = (props: DataPropsType) =>{
    return(
        <div className='profile'>
            <Avatar photos={props.profile.photos}/>

            <Description name={props.profile.fullName}
                         lookingForAJob={props.profile.lookingForAJob}/>
            < Contacts contacts={props.profile.contacts} />
            <ProfileStatus status = 'It is ok' />
        </div>
    )
}