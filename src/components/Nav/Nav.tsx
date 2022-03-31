import React from 'react';
import './Nav.css';
import {Item} from "./Item/Item";

export const Nav = () =>{
    return(
        <nav className='nav'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </nav>
    )
}
