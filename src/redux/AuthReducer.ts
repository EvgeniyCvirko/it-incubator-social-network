import {authAPI} from "../API/api";
import {Dispatch} from "redux";

export type AuthType = {
    userId: number
    email: string
    login: string
    isFetching: boolean
}
export type ActionAuthType = ReturnType<typeof setUserData>
let initialState = {
    userId: 0,
    email: '',
    login: '',
    isFetching: false,
}
export const AuthReducer = (state: AuthType = initialState, action: ActionAuthType) => {
    switch (action.type) {
        case "SetUserData":
            return {
                ...state,
                ...action.data,
                isFetching:true
            };
    }
    return state;
}
export const setUserData = (userId: number, email: string, login: string) => ({
    type: "SetUserData", data:{userId,email,login}
} as const);
export const getAuthentication = () =>{
    return (dispatch: Dispatch<ActionAuthType>) =>{
        authAPI.getAuth().then(data =>{
            if(data.resultCode === 0){
                let {id, login, email } = data.data
                dispatch(setUserData(id,email,login))
            }
        })
    }
}

