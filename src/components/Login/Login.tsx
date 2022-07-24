import React from "react";
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux_store";
import {Redirect} from "react-router-dom";

type MapStateToPropsType ={
    isAuth: boolean
}
export type LoginPropsType ={
    login: (email:string, password:string, rememberMe:boolean)=> void
    isAuth: boolean
}

export const Login = (props:LoginPropsType ) => {
    const onSubmit = (formData: FormDataType) =>{
        props.login(formData.email, formData.password, formData.rememberMe)

    }
    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType  =>{
    return {
        isAuth: state.auth.isAuth
    }
}
export const LoginContainer = connect(mapStateToProps,{login})(Login)