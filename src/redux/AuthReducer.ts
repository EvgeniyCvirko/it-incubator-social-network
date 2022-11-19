import {authAPI} from "../API/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {BaseThunkType} from "./redux_store";
//type
export type AuthType = {
  userId: string
  email: string
  login:  string | null,
  isAuth: boolean
  isLoading: boolean
}
export type ActionAuthType = ReturnType<typeof setUserData> | ReturnType<typeof setIsAuthLoading>
type ThunkType = BaseThunkType<ActionAuthType | ReturnType<typeof stopSubmit>>
//state
let initialState = {
  isLoading: true,
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
}

type InitialStateType = typeof initialState
export const AuthReducer = (state = initialState, action: ActionAuthType): InitialStateType => {
  switch (action.type) {
    case "SetUserData":
      return {
        ...state,
        ...action.data,
      };
    case "SetIsAuthLoading":
      return {...state, isLoading: action.isLoading}
    default: return state;
  }
}
export const setUserData = (userId: number | null, email: string, login: string, isAuth: boolean) => ({
  type: "SetUserData", data: {userId, email, login, isAuth}
} as const);
export const setIsAuthLoading = ({isLoading}: { isLoading: boolean }) => ({
  type: "SetIsAuthLoading", isLoading
} as const);

export const getAuthentication = () =>
  async (dispatch: Dispatch<ActionAuthType>) => {
    dispatch(setIsAuthLoading({isLoading: true}))
    try {
    const data = await authAPI.getAuth()
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserData(id, email, login, true))
      }
    } finally {
      dispatch(setIsAuthLoading({isLoading: false}))
    }
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
   async (dispatch) => {//need fix!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await authAPI.postLogin(email, password, rememberMe)
        if (res.resultCode === 0) {
          dispatch(getAuthentication())
        } else {
          const message = res.messages.length > 0 ? res.messages[0] : 'Some error'
          dispatch(stopSubmit('login', {_error: message}))
        }
}

export const logout = () =>
  async (dispatch: Dispatch<ActionAuthType>) => {
    const data = await authAPI.deleteLogin()
    if (data.resultCode === 0) {
      dispatch(setUserData(null, '', '', false))
    }
  }


