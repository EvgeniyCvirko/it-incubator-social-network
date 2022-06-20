import React from 'react';

export type UsersPageType ={
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type UsersType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type PhotosType = {
    small:string | null
    large:string | null
}
export type LocationType = {
    country: string,
    city: string,
}


export type ActionUsersPageType = ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof CurrentPageAC>

let initialState ={
    users: [],
    pageSize: 5,
    totalUsersCount:21,
    currentPage: 3
}

export const usersPageReducer = (state: UsersPageType = initialState, action: ActionUsersPageType):UsersPageType => {

    switch (action.type) {
        case "Follow" :
            return {
                ...state,
                users: state.users.map(u => u.id === action.IdUser ? {...u, followed: true} : u)
            }
        case "UnFollow" :
            return {
                ...state,
                users: state.users.map(u => u.id === action.IdUser ? {...u, followed: false} : u)
            };
        case "SetUsers" :
            return {...state, users: [...state.users, ...action.users]}
        case "CurrentPage" :
            return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}
export const FollowAC = (IdUser: string) => ({type: "Follow", IdUser} as const);
export const UnFollowAC = (IdUser: string) => ({type: "UnFollow", IdUser} as const);
export const CurrentPageAC = (currentPage: number) => ({type: "CurrentPage", currentPage} as const);
export const setUsersAC = (users: UsersType[]) => ({type: "SetUsers", users} as const);
