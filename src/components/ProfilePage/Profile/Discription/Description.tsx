import React from 'react';
import './List.css';
import smileNo from './../../../../img/ProfilePage/Profile/smileNo.jpg'
import smileYes from './../../../../img/ProfilePage/Profile/smileYes.jpg'

type DescriptionPropsType = {
    name: string
    lookingForAJob:boolean
}

export const Description = (props: DescriptionPropsType) =>{
    return(
        <div className='list'>
            <li>{props.name}</li>
            <li>Looking for a job: {
                props.lookingForAJob ?
                <img src={smileNo} alt=""/>:
                <img src={smileYes} alt=""/>
            }
            </li>
        </div>
    )
}