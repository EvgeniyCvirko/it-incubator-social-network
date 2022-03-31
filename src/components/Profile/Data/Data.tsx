import React from 'react';
import './Data.css';
import {Avatar} from "./Avatar/Avatar";
import {List} from "./List/List";



export const Data = () =>{
    return(
        <div className='data'>
            <Avatar />
            <List />
        </div>
    )
}