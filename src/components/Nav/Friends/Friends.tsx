import React from 'react';
import s from './Friends.module.css';
import {FriendsType} from '../../../types/types';

type FriendsPropsType={
    friend: Array<FriendsType>,
}

export const Friends = (props:FriendsPropsType) =>{
    let listFriends = props.friend.map(e=>{
        return(
            <div key={e.id}>
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