import {v1} from "uuid";
import {profileAPI} from "../API/api";
import {Dispatch} from "redux";
import {stopSubmit} from 'redux-form';
import {BaseThunkType} from './redux_store';

export type PostsType = {
    id: string,
    message: string | undefined,
    count: number,
}
export type ActionProfilePageType = ReturnType<typeof addPostAC>
   | ReturnType<typeof setUsersProfile>
   | ReturnType<typeof setUserStatus>
   | ReturnType<typeof savePhotoAvatar>

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:ContactsProfileType
    photos: PhotosProfileType
    aboutMe: string
}
export type ContactsProfileType ={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosProfileType ={
    small: string | null
    large: string | null
}
type ThunkType = BaseThunkType<ActionProfilePageType | ReturnType<typeof stopSubmit>>

let initialState ={
    posts: [
        {id: v1(), message: 'Hey, why nobody love me?', count: 100},
        {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
        {id: v1(), message: 'Ho-ho-ho', count: 50},
    ] as PostsType[],
    profile: null as ProfileType | null,
    newPostText: '',
    status: '',
}

type InitialStateType = typeof initialState

export const profilePageReducer = (state = initialState, action: ActionProfilePageType): InitialStateType => {

    switch (action.type) {

        case "AddPost":
            let newPost = {
                id: v1(),
                message: action.post,
                count: 25,
            }
            return {...state, posts: [ newPost,...state.posts]};
        case "SetUserProfile":
            return {...state, profile: action.profile }
        case "SetUserStatus":
            return {...state, status: action.status }
        case "SaveAvatarPhoto":
            return {...state,
               profile:{...state.profile, photos: action.file} as ProfileType}
        default: return state;
    }
}
export const addPostAC = (text: string | undefined) => ({type: "AddPost",post: text} as const)
export const setUserStatus = (status: string) => ({type: "SetUserStatus", status} as const);
export const setUsersProfile = (profile: ProfileType) => ({type: "SetUserProfile", profile} as const);
export const savePhotoAvatar = (file: PhotosProfileType) => ({type: "SaveAvatarPhoto", file} as const);

export const getProfile = (userId:number) =>
    async (dispatch : Dispatch<ReturnType<typeof setUsersProfile>>) => {
        const res = await profileAPI.getProfile(userId)
            dispatch(setUsersProfile(res))
    }


export const getUserStatus = (userId:string) =>
    async (dispatch : Dispatch<ReturnType<typeof setUserStatus>>) => {
        const res = await profileAPI.getUserStatus(userId)
            dispatch(setUserStatus(res.data))
    }


export const updateUserStatus = (status:string) =>
    async (dispatch : Dispatch<ReturnType<typeof setUserStatus>>) => {
        const res = await profileAPI.updateUserStatus(status)
            if(res.data.resultCode === 0 ) {
                dispatch(setUserStatus(status))
            }
    }

export const savePhoto = (file:File) =>
  async (dispatch : Dispatch<ReturnType<typeof savePhotoAvatar>>) => {
      const res = await profileAPI.savePhoto(file)
      if(res.data.resultCode === 0 ) {
          dispatch(savePhotoAvatar(res.data.data.photos))
      }else {
          console.log(res.data)}
  }

  export const updateProfile = (newProfile:ProfileType): ThunkType =>
  async (dispatch ) => {
      const res = await profileAPI.updateProfile(newProfile)
      if(res.data.resultCode === 0 ) {
          dispatch(setUsersProfile(newProfile))
      }else {
          let error = {}
          res.data.messages.map(e => {
              const m = e.slice(30, e.length-1).toLowerCase()
              // @ts-ignore
              error[`${m}`]  = e
          })
          dispatch(stopSubmit('edit-profile', {"contacts":error }))
         return Promise.reject(res.data.messages)
      }
  }

