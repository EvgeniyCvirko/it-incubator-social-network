import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';
import {BaseThunkType} from './redux_store';
import {FormDataType} from '../components/Login/LoginForm/LoginForm';
import {authAPI} from '../API/auth-api';
import {securityAPI} from '../API/security-api';
//type
export type ActionAuthType = ReturnType<typeof setUserData>
  | ReturnType<typeof setIsAuthLoading>
  | ReturnType<typeof setCaptcha>
type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionAuthType | ReturnType<typeof stopSubmit>>
//state
let initialState = {
  isLoading: true,
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captcha: null as string | null
}
//reducers
export const AuthReducer = (state = initialState, action: ActionAuthType): InitialStateType => {
  switch (action.type) {
    case "SetUserData":
      return {
        ...state,
        ...action.data,
      };
    case "SetIsAuthLoading":
      return {...state, isLoading: action.isLoading}
    case 'SetCaptcha':
      return { ...state, captcha: action.url}
    default: return state;
  }
}
//actions
export const setUserData = (userId: number | null, email: string, login: string, isAuth: boolean) => ({
  type: "SetUserData", data: {userId, email, login, isAuth}
} as const);
export const setIsAuthLoading = ({isLoading}: { isLoading: boolean }) => ({
  type: "SetIsAuthLoading", isLoading
} as const);
export const setCaptcha = (url: string | null) => ({
  type: "SetCaptcha", url
} as const);
//thunks
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

export const login = (data:FormDataType): ThunkType =>
   async (dispatch) => {//need fix!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await authAPI.postLogin(data)
        if (res.resultCode === 0) {
          dispatch(getAuthentication())
        } else {
          if (res.resultCode === 10){
            dispatch(getCaptcha())
          }
          const message = res.messages.length > 0 ? res.messages[0] : 'Some error'
          dispatch(stopSubmit('login', {_error: message}))
        }
}

export const logout = () =>
  async (dispatch: Dispatch<ActionAuthType>) => {
    const data = await authAPI.deleteLogin()
    if (data.resultCode === 0) {
      dispatch(setUserData(null, '', '', false))
      dispatch(setCaptcha(null))
    }
  }

export const getCaptcha = () =>
  async (dispatch: Dispatch<ActionAuthType>) => {
    const res = await securityAPI.getCaptcha()
    dispatch(setCaptcha(res.data.url))
  }


