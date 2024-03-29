import React from 'react';
import './ProfileInfo.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../../common/FormControl/FormControl';
import {required} from '../../../../util/valodator/validators';
import {ProfileType} from '../../../../types/types';

type ProfileInfoPropsType = {
  profile: ProfileType
}

export const ProfileInfoEdit: React.FC<InjectedFormProps<ProfileType, ProfileInfoPropsType> & ProfileInfoPropsType> = (props) => {
const {error, handleSubmit,profile} = props
  return (

    <form onSubmit={handleSubmit} className='profileForm'>
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
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key} className='contact'>
          <b>{key}: <Field component={Input} validate={[]} name={`contacts.${key}`}/></b>
        </div>
      })}
      </div>
      {error && <div className='error'>{error}</div>}
      <div>
        <button >save</button>
      </div>
    </form>
  )
}

export const ProfileInfoEditForm = reduxForm<ProfileType, ProfileInfoPropsType>({form: 'edit-profile'})(ProfileInfoEdit)