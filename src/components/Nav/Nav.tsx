import React from 'react';
import b from './Nav.module.css';
import {Item} from "./Item/Item";
import {NavLink} from "react-router-dom";
import {SideBarType} from "../../redux/state";

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
        </nav>
    )
}
