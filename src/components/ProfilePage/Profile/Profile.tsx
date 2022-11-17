import React, {ChangeEvent, useState} from 'react';
import s from './Profile.module.css';
import {Avatar} from './Avatar/Avatar';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../../redux/ProfilePageReducer';
import {Contacts} from './ProfileInfo/Contacts/Contacts';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfileInfoEditForm} from './ProfileInfo/ProfileInfoEdit';

type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwn:string
  savePhoto:(file: File) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, status,updateStatus, isOwn,savePhoto, updateProfile}) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) =>{
    if (e.target.files) {
      savePhoto(e.target.files[0])
    }
  }
  const editClickHandler = () => {
    setEditMode(true)
  }
  const onSubmit = () =>{
    setEditMode(false)
  }
  return (
    <div className={s.profile}>
      <Avatar photos={profile.photos}/>
      { (+isOwn === profile.userId) ? <input type={'file'} onChange={onChangeAvatar}/> : null}
      <div className={s.description}>
        <button onClick={editClickHandler}>Edit profile</button>
        {editMode ?
          <ProfileInfoEditForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileInfo info={profile}/>
        }
      </div>
      <b>Contacts:</b>
      <Contacts contacts={profile.contacts}/>
      <ProfileStatus status={status} updateStatus={updateStatus}/>

    </div>
  )
}