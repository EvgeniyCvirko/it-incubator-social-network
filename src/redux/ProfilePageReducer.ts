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

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:ContactsProfileType
    photos: PhotosProfileType
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


let initialState ={
    posts: [
        {id: v1(), message: 'Hey, why nobody love me?', count: 100},
        {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
        {id: v1(), message: 'Ho-ho-ho', count: 50},
    ],
    profile: {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Evgeniy Cvirko',
        contacts:{
            github: 'https://github.com/EvgeniyCvirko',
            vk: 'https://vk.com',
            facebook: '',
            instagram: '@EvgeniyCvirko',
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
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionProfilePageType) => {

    switch (action.type) {

        case "AddPost":
            let newPost = {
                id: v1(),
                message: action.post,
                count: 25,
            }
            return {...state, posts: [...state.posts, newPost]};
        case "SetUserProfile":
            return {...state, profile: action.profile }
        case "SetUserStatus":
            return {...state, status: action.status }
    }
    return state;
}
export const addPostAC = (text: string | undefined) => ({type: "AddPost",post: text} as const)
export const setUserStatus = (status: string) => ({type: "SetUserStatus", status} as const);
export const setUsersProfile = (profile: ProfileType) => ({type: "SetUserProfile", profile} as const);

export const getProfile = (userId:string) => {
    return (dispatch : Dispatch<ReturnType<typeof setUsersProfile>>) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data))
        })
    }
}

export const getUserStatus = (userId:string) => {
    return (dispatch : Dispatch<ReturnType<typeof setUserStatus>>) => {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}

export const updateUserStatus = (status:string) => {
    return (dispatch : Dispatch<ReturnType<typeof setUserStatus>>) => {
        profileAPI.updateUserStatus(status).then(response =>{
            if(response.data.resultCode === 0 ) {
                dispatch(setUserStatus(status))
            }
        })
    }
}
