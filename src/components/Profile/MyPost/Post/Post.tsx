import React from 'react';
import './Post.css';


export const Post = () =>{
    return(
        <div className='post'>
            <div className="logo">
                <img src="https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png" alt=""/>
            </div>
            <p className="text">Hey, why nobody love me?</p>
        </div>
    )
}