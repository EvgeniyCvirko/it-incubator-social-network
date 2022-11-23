import {
    addPostAC,
    profilePageReducer,
    setUsersProfile,
    setUserStatus
} from './ProfilePageReducer';
import {v1} from "uuid";
import {ContactsProfileType, PhotosType, PostsType, ProfileType} from '../types/types';

let startState ={
    posts: [
        {id: v1(), message: 'Hey, why nobody love me?', count: 100},
        {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
        {id: v1(), message: 'Ho-ho-ho', count: 50},
    ] as PostsType[],
    profile: null as ProfileType | null,
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
        photos: {} as PhotosType,
    }
    const action = setUsersProfile(user)
    const endState = profilePageReducer(startState, action)
    expect(endState.profile?.userId).toBe(1 )
    expect(endState.profile?.fullName).toBe("Alex")
})