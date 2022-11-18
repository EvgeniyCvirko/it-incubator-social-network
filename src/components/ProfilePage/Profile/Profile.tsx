import React, {ChangeEvent, useState} from 'react';
import s from './Profile.module.css';
import {Avatar} from './Avatar/Avatar';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../../redux/ProfilePageReducer';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfileInfoEditForm} from './ProfileInfo/ProfileInfoEdit';
import {Loading} from '../../common/Loading';

type ProfilePropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwn:boolean
  savePhoto:(file: File) => void
  updateProfile: (newProfile:ProfileType) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, status,updateStatus, isOwn,savePhoto, updateProfile}) => {
  const [editMode, setEditMode] = useState<boolean>(false)

  if (!profile) {
    return <Loading/>
  }

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) =>{
    if (e.target.files) {
      savePhoto(e.target.files[0])
    }
  }
  const editClickHandler = () => {
    setEditMode(true)
  }
  const onSubmit = (newProfile:ProfileType ) =>{
    updateProfile(newProfile)
    setEditMode(false)
  }
  return (
    <div className={s.profile}>
      <Avatar photos={profile.photos}/>
      { isOwn  ? <input type={'file'} onChange={onChangeAvatar}/> : null}
      <div className={s.description}>
        <button onClick={editClickHandler}>Edit profile</button>
        {editMode ?
          <ProfileInfoEditForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileInfo profile={profile}/>
        }
      </div>

      <ProfileStatus status={status} updateStatus={updateStatus}/>

    </div>
  )
}