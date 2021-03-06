import React from 'react';
import {usersAPI} from "../API/api";
import {Dispatch} from "redux";


export type UsersPageType ={
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
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


export type ActionUsersPageType = ReturnType<typeof changeFollowed>
    | ReturnType<typeof changeUnFollowed>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setFollowingInProgress>

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
            return {...state, users: action.users}
        case "SetCurrentPage" :
            return { ...state, currentPage: action.currentPage}
        case "SetTotalUsersPage" :
            return { ...state, totalUsersCount: action.count}
        case "SetToggleFetching":
            return {...state, isFetching: action.isFetching}
        case "SetFollowingInProgress":
            return {...state,
                followingInProgress: action.isFollowing ?
                    [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id => id !== action.userId )
            }
        default:
            return state;
    }
}
export const changeFollowed = (IdUser: string) => ({type: "Follow", IdUser} as const);
export const changeUnFollowed = (IdUser: string) => ({type: "UnFollow", IdUser} as const);
export const setCurrentPage = (currentPage: number) => ({type: "SetCurrentPage", currentPage} as const);
export const setTotalUsersCount = (count: number) => ({type: "SetTotalUsersPage", count} as const);
export const setIsFetching = (isFetching: boolean) => ({type: "SetToggleFetching", isFetching} as const);
export const setFollowingInProgress = ( userId:string, isFollowing: boolean) => ({type: "SetFollowingInProgress", userId, isFollowing} as const);
export const setUsers = (users: UsersType[]) => ({type: "SetUsers", users} as const);

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionUsersPageType>) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setIsFetching(false))
            dispatch(setTotalUsersCount(150))
        })
    }

}

export const followUser = (userId: string) =>{
    return (dispatch: Dispatch<ActionUsersPageType>) => {
        dispatch(setFollowingInProgress(userId,true))
        usersAPI.postUsers(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(changeFollowed(userId))
            }
            dispatch(setFollowingInProgress(userId,false))
        })
    }
}
export const unFollowUser = (userId: string) =>{
    return (dispatch: Dispatch<ActionUsersPageType>) => {
        dispatch(setFollowingInProgress(userId,true))
        usersAPI.deleteUsers(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(changeUnFollowed(userId))
            }
            dispatch(setFollowingInProgress(userId,false))
        })
    }
}
