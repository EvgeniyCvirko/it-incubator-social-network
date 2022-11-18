import {v1} from "uuid";
import {profileAPI} from "../API/api";
import {Dispatch} from "redux";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
    status:string
}
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
    small: string
    large: string
}


/*let initialState ={
    posts: [
        {id: v1(), message: 'Hey, why nobody love me?', count: 100},
        {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
        {id: v1(), message: 'Ho-ho-ho', count: 50},
    ],
    profile: {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        aboutMe: '',
        contacts:{
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small:'https://cdn.vectorstock.com/i/1000x1000/38/17/male-face-avatar-logo-template-pictograph-vector-11333817.webp',
            large:'',
        }

    },
    newPostText: '',
    status: '',
}*/

let initialState ={
    posts: [
        {id: v1(), message: 'Hey, why nobody love me?', count: 100},
        {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
        {id: v1(), message: 'Ho-ho-ho', count: 50},
    ],
    profile: null as ProfileType | null,
    newPostText: '',
    status: '',
}

export const profilePageReducer = (state = initialState, action: ActionProfilePageType) => {

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
               profile:{...state.profile, photos: action.file} }
    }
    return state;
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

  export const updateProfile = (newProfile:ProfileType) =>
  async (dispatch : Dispatch<ReturnType<typeof setUsersProfile>>) => {
      const res = await profileAPI.updateProfile(newProfile)
      if(res.data.resultCode === 0 ) {
          dispatch(setUsersProfile(newProfile))
      }else {
          console.log(res.data)}
  }

