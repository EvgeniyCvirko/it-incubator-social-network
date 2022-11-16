import React from 'react';

import smileNo from './../../../../img/ProfilePage/Profile/smileNo.jpg'
import smileYes from './../../../../img/ProfilePage/Profile/smileYes.jpg'
import {ProfileType} from '../../../../redux/ProfilePageReducer';

type ProfileInfoPropsType = {
    info: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) =>{


    return(
        <div >
            <li><b>Full Name</b>: {props.info.fullName}</li>
            <li><b>About me</b>: {props.info.aboutMe}</li>
            <li><b>Looking for a job</b>: {
                props.info.lookingForAJob ?
                <img src={smileNo} alt=""/>:
                <img src={smileYes} alt=""/>
            }
            </li>
          <li><b>Looking for a job description:</b>{props.info.lookingForAJobDescription}</li>
        </div>
    )
}