import React from 'react';
import './Nav.css';
import {Item} from "./Item/Item";

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
            <div className="item">
                <a href='/profile'>Profile</a>
            </div>
            <div className="item">
                <a href='/dialogs'>Message</a>
            </div>
            <div className="item">
                <a href=''>News</a>
            </div>
            <div className="item">
                <a href=''>Music</a>
            </div>
            <div className="item">
                <a href=''>Settings</a>
            </div>

        </nav>
    )
}
