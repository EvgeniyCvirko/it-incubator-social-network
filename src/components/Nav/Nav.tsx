import React from 'react';
import b from './Nav.module.css';
import {Item} from "./Item/Item";
import {NavLink} from "react-router-dom";


export const Nav = () =>{
    return(
        // <nav className='nav'>
        //     <Item href='/profile' item='Profile'/>
        //     <Item href='/dialogs' item='Messages'/>
        //     <Item item='News' />
        //     <Item item='Music'/>
        //     <Item item='Settings'/>
        // </nav>
        <nav>
            <div className={b.item}>
                <NavLink to='/profile' activeClassName={b.active}>Profile</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/dialogs'  activeClassName={b.active}>Message</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/news'  activeClassName={b.active}>News</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/music'  activeClassName={b.active}>Music</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/settings'  activeClassName={b.active}>Settings</NavLink>
            </div>

        </nav>
    )
}
