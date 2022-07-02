import React from "react";
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";

export const Login = () => {
    const onSubmit = (formData: FormDataType) =>{
        console.log(formData)
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

