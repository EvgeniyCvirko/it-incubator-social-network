import React from "react";
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {AddMessageAC, DialogsPageType} from "../../redux/DialoguesPageReducer";
import {AppStateType} from "../../redux/redux_store";
import {Dispatch} from "redux";
import {login} from "../../redux/AuthReducer";

export type LoginPropsType ={
    login: (email:string, password:string, rememberMe:boolean)=> void
}

export const Login = (props:LoginPropsType ) => {
    const onSubmit = (formData: FormDataType) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export const LoginContainer = connect(null,{login})(Login)