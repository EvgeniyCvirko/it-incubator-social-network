import React from 'react';
import './Avatar.css';
import {PhotosProfileType} from "../../../../redux/ProfilePageReducer";

type AvatarPropsType ={
    photos: PhotosProfileType
}


export const Avatar = (props:AvatarPropsType) =>{
    return(
        <div className='avatar'>
            { props.photos.small
                ? <img src={props.photos.small} alt=''/>:
                <img
                    src="https://upload.wikimedia.org/wikipedia/ru/a/ac/No_image_available.svg"
                    alt=""/>
            }
        </div>
    )
}