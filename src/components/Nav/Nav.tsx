import React from 'react';
import './Nav.css';
import {Item} from "./Item/Item";

export const Nav = () =>{
    return(
        <nav className='nav'>
            <Item item='Profile'/>
            <Item item='Messages'/>
            <Item item='News' />
            <Item item='Music'/>
            <Item item='Settings'/>
        </nav>
    )
}
