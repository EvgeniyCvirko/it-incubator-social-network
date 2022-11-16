import React from 'react';
import {ContactsProfileType} from "../../../../../redux/ProfilePageReducer";
import s from './contacts.module.css'

type DescriptionPropsType = {
    contacts: ContactsProfileType
}

export const Contacts = (props: DescriptionPropsType) =>{

    const {github,instagram,vk,facebook,twitter, website,youtube,mainLink} = props.contacts

    return (
        <div className={s.contacts}>
            {github && <p>github: {github}</p> }
            {instagram && <p>instagram: {instagram}</p>}
            {vk &&  <p>vk: {vk}</p> }
            {facebook &&  <p>facebook: {facebook}</p> }
            {twitter && <p>twitter: {twitter}</p>}
            {website &&  <p>website: {website}</p>}
            {youtube &&  <p>youtube: {youtube}</p>}
            {mainLink &&  <p>mainLink: {mainLink}</p>}
        </div>
    )

}