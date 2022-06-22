import React from 'react';
import './Data.css';
import {Avatar} from "./Avatar/Avatar";
import {Description} from "./Discription/Description";
import {ProfileType} from "../../../redux/ProfilePageReducer";
import {Contacts} from "./Discription/Contacts/Contacts";

type DataPropsType = {
    profile: ProfileType
}

export const Profile = (props: DataPropsType) =>{
    return(
        <div className='data'>
            <Avatar photos={props.profile.photos}/>
            <Description name={props.profile.fullName}
                         lookingForAJob={props.profile.lookingForAJob}/>
            < Contacts contacts={props.profile.contacts} />
        </div>
    )
}