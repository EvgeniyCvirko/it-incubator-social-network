import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/AuthReducer';
import {AppStateType} from '../../redux/redux_store';
import {Redirect} from 'react-router-dom';

type MapStateToPropsType = {
  isAuth: boolean
  captcha: string | null
}
export type MapDispatchToPropsType = {
  login: (data: FormDataType) => void
}

export type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

export const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData)

  }
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>
  )
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
  }
}
export const LoginContainer = connect(mapStateToProps, {login})(Login)