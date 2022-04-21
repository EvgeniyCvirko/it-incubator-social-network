import React from 'react';
import s from './Friends.module.css';

type FriendsPropsType={
    friend: Array<Friends>,
}
export type Friends={
    avatar: string,
    name: string,
}
export const Friends = (props:FriendsPropsType) =>{
    let listFriends = props.friend.map(e=>{
        return(
            <div>
                <img src={e.avatar} alt=""/>{e.name}
            </div>
        )
    })
    return(
            <div className='item'>
                <h3 className={s.title}>Friends</h3>
                {listFriends}
            </div>
    )
}