import React from "react";
import {reduxForm} from "redux-form";

export const LoginForm = () => {
    return(
        <form>
            <div>
                <input placeholder='login'/>
            </div>
            <div>
                <input placeholder='password'/>
            </div>
            <div>
                <input type="checkbox"/> Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)