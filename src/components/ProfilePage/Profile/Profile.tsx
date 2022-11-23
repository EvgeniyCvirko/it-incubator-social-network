import React, {ChangeEvent, useState} from 'react';
import s from './Profile.module.css';
import {Avatar} from './Avatar/Avatar';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfileInfoEditForm} from './ProfileInfo/ProfileInfoEdit';
import {Loading} from '../../common/Loading';
import {ProfileType} from '../../../types/types';

type ProfilePropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwn:boolean
  savePhoto:(file: File) => void
  updateProfile: (newProfile:ProfileType) => Promise<any>
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
    updateProfile(newProfile).then(()=>{
      setEditMode(false)
    }
    )
  }
  return (
    <div className={s.profile}>
      <Avatar photos={profile.photos}/>
      { isOwn  ? <input type={'file'} onChange={onChangeAvatar}/> : null}
      <div className={s.description}>
        {isOwn  ? <button onClick={editClickHandler}>Edit profile</button> : null}
        {editMode ?
          <ProfileInfoEditForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileInfo profile={profile}/>
        }
      </div>

      <ProfileStatus status={status} updateStatus={updateStatus}/>

    </div>
  )
}