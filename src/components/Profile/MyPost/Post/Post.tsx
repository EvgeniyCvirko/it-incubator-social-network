import React from 'react';
import './Post.css';

type PostPropsType = {
    id: string,
    message: string,
    count: number,
}

export const Post = (props:PostPropsType) =>{
    return(
        <div className='post'>
            <div className="logo">
                <img src="https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png" alt=""/>
            </div>
            <p className="text">{props.message}</p>
            <span>Like{props.count}</span>
        </div>
    )
}