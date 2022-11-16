import {
    addPostAC,
    ContactsProfileType,
    PhotosProfileType,
    profilePageReducer,
    setUsersProfile,
    setUserStatus
} from "./ProfilePageReducer";
import {v1} from "uuid";

let startState ={
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
        aboutMe: '111',
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

test('Posts should be after add post', () =>{
    const action = addPostAC('new text for post')
    const endState = profilePageReducer(startState, action)
    expect(endState.posts[0].message).toBe('new text for post')
})

test(`Profile's  status should be after change status`, () =>{
    const action = setUserStatus('new status')
    const endState = profilePageReducer(startState, action)
    expect(endState.status).toBe('new status')
})

test('Profile should be after set users', () =>{
    const user ={
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: "Alex",
        aboutMe: '111',
        contacts:{} as ContactsProfileType,
        photos: {} as PhotosProfileType,
    }
    const action = setUsersProfile(user)
    const endState = profilePageReducer(startState, action)
    expect(endState.profile.userId).toBe(1)
    expect(endState.profile.fullName).toBe("Alex")
})