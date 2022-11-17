import React from 'react';
import s from './contacts.module.css'

type DescriptionPropsType = {
  contact: string
  value: string | undefined
}

export const Contacts = (props: DescriptionPropsType) => {
  return (
    <div className={s.contacts}>
      {props.value && <p><b>{props.contact}</b>: {props.value}</p>}
    </div>
  )
}