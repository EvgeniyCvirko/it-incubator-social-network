import React from 'react';

import smileNo from './../../../../img/ProfilePage/Profile/smileNo.jpg'
import smileYes from './../../../../img/ProfilePage/Profile/smileYes.jpg'
import {ContactsProfileType, ProfileType} from '../../../../redux/ProfilePageReducer';
import {Contacts} from './Contacts/Contacts';

type ProfileInfoPropsType = {
  profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) =>{
    return(
      <>
        <div>
          <li><b>Full Name</b>: {props.profile.fullName}</li>
          <li><b>About me</b>: {props.profile.aboutMe}</li>
          <li><b>Looking for a job</b>: {
            props.profile.lookingForAJob ?
              <img src={smileYes} alt=""/> :
              <img src={smileNo} alt=""/>
          }
          </li>
          <li><b>Looking for a job description:</b>{props.profile.lookingForAJobDescription}</li>
        </div>
        <div>
          <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
          return <Contacts key={key} contact={key} value={props.profile.contacts[key as keyof ContactsProfileType]}/>
        })}
        </div>
      </>
    )
}