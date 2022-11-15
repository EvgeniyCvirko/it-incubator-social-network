import React, {ChangeEvent} from 'react';
import './Profile.css';
import {Avatar} from './Avatar/Avatar';
import {Description} from './Discription/Description';
import {ProfileType} from '../../../redux/ProfilePageReducer';
import {Contacts} from './Discription/Contacts/Contacts';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';

type DataPropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwn:string
  savePhoto:(file: File) => void
}

export const Profile: React.FC<DataPropsType> = ({profile, status,updateStatus, isOwn,savePhoto}) => {
  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) =>{
    if (e.target.files) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div className="profile">
      <Avatar photos={profile.photos}/>
      { (+isOwn === profile.userId) ? <input type={'file'} onChange={onChangeAvatar}/> : null}
      <Description name={profile.fullName}
                   lookingForAJob={profile.lookingForAJob}/>
      <Contacts contacts={profile.contacts}/>
      <ProfileStatus status={status} updateStatus={updateStatus}/>
    </div>
  )
}