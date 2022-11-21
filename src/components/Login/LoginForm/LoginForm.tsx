import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../common/FormControl/FormControl';
import {required} from '../../../util/valodator/validators';
import '../../common/style/commonStyle.css'

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}

type LoginFormType ={
  captcha: string | null
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormType> & LoginFormType>= (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} validate={[required]} name="email" placeholder="Email"/>
      </div>
      <div>
        <Field component={Input} validate={[required]} name="password" placeholder="Password" type="password"/>
      </div>
      <div>
        <Field component={Input} name="rememberMe" type="checkbox"/> Remember me
      </div>
      {props.captcha && <div className="captcha"><img src={props.captcha} alt=""/></div>}
      {props.captcha &&
          <Field component={Input} validate={[required]} name="captcha" placeholder="Symbols from image"/>
      }
      {props.error && <div className={s.error}>{props.error}</div>}
      <div>
        <button>login</button>
      </div>
    </form>
  )
}
export const LoginReduxForm = reduxForm<FormDataType,LoginFormType>({form: 'login'})(LoginForm)