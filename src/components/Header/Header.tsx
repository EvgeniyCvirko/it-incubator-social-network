import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = ({isAuth,login}) =>{
    return(
    <header className={s.header}>
        <img src="https://mobile-review.com/articles/2019/image/echo-43/scr/10.jpg" alt=""/>
        <div className={s.auth}>
            { isAuth ?
                login :
                <NavLink to='/login'>Login</NavLink>
            }
        </div>
    </header>
    )
}
