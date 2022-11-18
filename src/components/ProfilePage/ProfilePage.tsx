import React from 'react';
import {Header} from './Header/Header';
import {Profile} from './Profile/Profile';
import {MyPostContainer} from './MyPost/MyPostContainer';
import {ProfileType} from '../../redux/ProfilePageReducer';

type ProfilePropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwn: boolean,
  savePhoto:(file: File) => void
  updateProfile: (profile: ProfileType) => Promise<any>
}

export const ProfilePage = (props: ProfilePropsType) => {
  return (
    <div>
      <Header/>
      <Profile profile={props.profile}
               status={props.status}
               updateStatus={props.updateStatus}
               isOwn={props.isOwn}
               savePhoto={props.savePhoto}
               updateProfile={props.updateProfile}
      />
      <MyPostContainer/>
    </div>
  )
}
