import React from 'react';
import s from'../../../Login/LoginForm/Login.module.css'
import {ProfileType} from '../../../../redux/ProfilePageReducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../../common/FormControl/FormControl';
import {required} from '../../../../util/valodator/validators';

type ProfileInfoPropsType = {
  profile: ProfileType
}

export const ProfileInfoEdit: React.FC<InjectedFormProps<ProfileType, ProfileInfoPropsType> & ProfileInfoPropsType> = (props) => {
const {error, handleSubmit,profile} = props
  return (

    <form onSubmit={handleSubmit}>
      Edit
      <div>
        <b>Full name:</b>
        <Field component={Input} validate={[required]} name="fullName"/>
      </div>
      <div>
        <b>About me:</b>
        <Field component={Textarea}  validate={[required]} name='aboutMe' />
      </div>
      <div>
        <b>Looking for a job:</b>
        <Field component={Input} name='lookingForAJob' type="checkbox"/>
      </div>
      <div>
        <b>My professional skills:</b>
        <Field component={Textarea}  validate={[required]} name='lookingForAJobDescription'/>
      </div>
      {error && <div className={s.error}>{error}</div>}
      <div>
        <button >save</button>
      </div>
      <div>
        <button >save</button>
      </div>
    </form>
  )
}

export const ProfileInfoEditForm = reduxForm<ProfileType, ProfileInfoPropsType>({form: 'edit-profile'})(ProfileInfoEdit)