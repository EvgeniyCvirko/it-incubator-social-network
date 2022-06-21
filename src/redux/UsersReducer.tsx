import React from 'react';

export type UsersPageType ={
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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


export type ActionUsersPageType = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof currentPageAC>
    | ReturnType<typeof totalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

let initialState ={
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

export const usersPageReducer = (state: UsersPageType = initialState, action: ActionUsersPageType):UsersPageType => {
    console.log(state.totalUsersCount)
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
            return {...state, users: action.users}
        case "CurrentPage" :
            return { ...state, currentPage: action.currentPage}
        case "SetTotalUsersPage" :
            return { ...state, totalUsersCount: action.count}
        case "ToggleFetching":
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}
export const followAC = (IdUser: string) => ({type: "Follow", IdUser} as const);
export const unFollowAC = (IdUser: string) => ({type: "UnFollow", IdUser} as const);
export const currentPageAC = (currentPage: number) => ({type: "CurrentPage", currentPage} as const);
export const totalUsersCountAC = (count: number) => ({type: "SetTotalUsersPage", count} as const);
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "ToggleFetching", isFetching} as const);
export const setUsersAC = (users: UsersType[]) => ({type: "SetUsers", users} as const);
