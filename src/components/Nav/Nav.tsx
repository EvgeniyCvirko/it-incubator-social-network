import React from 'react';
import b from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {SideBarType} from "../../redux/store";
import {Friends} from "./Friends/Friends";

export type NavPropsType={
    state: SideBarType,
}

export const Nav = (props: NavPropsType) =>{
    let list = props.state.list.map( e =>{
        let path = '/' + e.namePage;
        return(
            <div className={b.item}>
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
