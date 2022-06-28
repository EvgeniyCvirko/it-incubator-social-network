import React from 'react';
import b from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {SideBarType} from "../../redux/SideBarReducer";

export type NavPropsType={
    state: SideBarType,
}

export const Nav = (props: NavPropsType) =>{
    let list = props.state.list.map( e =>{
        let path = '/' + e.namePage.toLocaleLowerCase();
        return(
            <div className={b.item} key={e.id}>
                <NavLink to={path} activeClassName={b.active}>{e.namePage}</NavLink>
            </div>
        )
    })

    return(
        <nav>
            {list}
            <Friends friend={props.state.friends}/>
        </nav>
    )
}
