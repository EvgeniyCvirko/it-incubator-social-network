import {v1} from "uuid";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
}
export type PostsType = {
    id: string,
    message: string | undefined,
    count: number,
}
export type ActionProfilePageType = ReturnType<typeof addPostAC>
   | ReturnType<typeof UpdateNewPosAC>
   | ReturnType<typeof setUsersProfile>

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
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionProfilePageType) => {

    switch (action.type) {
        case "ADD_Post":
            let newPost = {
                id: v1(),
                message: action.post,
                count: 25,
            }
            return {...state, posts: [...state.posts, newPost]};
        case "Update_New_Post":
            return {...state, newPostText: action.newText};
        case "SetUserProfile":
            return {...state, profile: action.profile }
    }
    return state;
}
export const addPostAC = (text: string | undefined) => ({type: "ADD_Post",post: text} as const)
export const UpdateNewPosAC = (newMessage: string) => ({type: "Update_New_Post", newText: newMessage} as const);

export const setUsersProfile = (profile: any) => ({type: "SetUserProfile", profile} as const);