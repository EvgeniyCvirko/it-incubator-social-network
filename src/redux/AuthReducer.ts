import {authAPI} from "../API/api";
import {Dispatch} from "redux";

export type AuthType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
}
export type ActionAuthType = ReturnType<typeof setUserData>
let initialState = {
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
                userId: action.data.userId
            };
    }
    return state;
}
export const setUserData = (userId: string, email: string, login: string, isAuth: boolean) => ({
    type: "SetUserData", data:{userId,email,login, isAuth}
} as const);

export const getAuthentication = () =>{
    return (dispatch: Dispatch<ActionAuthType>) =>{
        authAPI.getAuth().then(data =>{
            if(data.resultCode === 0){
                let {id, login, email } = data.data
                dispatch(setUserData(id,email,login, true))
            }
        })
    }
}

export const login = (email:string, password:string, rememberMe:boolean) =>{
    return (dispatch: Dispatch<ActionAuthType>) =>{
        authAPI.postLogin(email, password, rememberMe).then(data =>{
            if(data.resultCode === 0){
                let {id, login, email } = data.data
                dispatch(setUserData(id,email,login, true))
            }
        })
    }
}

export const logout = () =>{
    return (dispatch: Dispatch<ActionAuthType>) =>{
        authAPI.deleteLogin().then(data =>{
            if(data.resultCode === 0){
                dispatch(setUserData('','','', false))
            }
        })
    }
}

