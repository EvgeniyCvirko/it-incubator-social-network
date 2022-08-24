import {authAPI} from "../API/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {BaseThunkType} from "./redux_store";
import {ActionAppType} from "./AppReducer";
//type
export type AuthType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
    isLoading: boolean
}
export type ActionAuthType = ReturnType<typeof setUserData> | ReturnType<typeof setIsAuthLoading>
type ThunkType = BaseThunkType<ActionAuthType | ReturnType<typeof stopSubmit>>
//component
let initialState = {
    isLoading: true,
    userId: '',
    email: '',
    login: '',
    isAuth: false,
}
export const AuthReducer = (state: AuthType = initialState, action: ActionAuthType) => {
    switch (action.type) {
        case "SetUserData":
            return {
                ...state,
                ...action.data,
            };
        case "SetIsAuthLoading":
            return {...state, isLoading: action.isLoading}
    }
    return state;
}
export const setUserData = (userId: string, email: string, login: string, isAuth: boolean) => ({
    type: "SetUserData", data: {userId, email, login, isAuth}
} as const);
export const setIsAuthLoading = ({isLoading}: { isLoading: boolean }) => ({
    type: "SetIsAuthLoading", isLoading
} as const);

export const getAuthentication = () => {
    return (dispatch: Dispatch<ActionAuthType>) => {
        dispatch(setIsAuthLoading({isLoading: true}))
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, email, login, true))
                }
            }).finally(() => dispatch(setIsAuthLoading({isLoading: false}))
        )
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return async (dispatch) => {//need fix!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        await authAPI.postLogin(email, password, rememberMe)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(getAuthentication())
                } else {
                    const message = res.messages.length > 0 ? res.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<ActionAuthType>) => {
        authAPI.deleteLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData('', '', '', false))
                }
            })
    }
}

