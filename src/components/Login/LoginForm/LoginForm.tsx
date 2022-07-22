import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControl/FormControl";
import {required} from "../../../util/valodator/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name='login'  placeholder='login'/>
            </div>
            <div>
                <Field component={Input}  validate={[required]} name='password' placeholder='password'/>
            </div>
            <div>
                <Field component='input' name='rememberMe' type="checkbox"/> Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)