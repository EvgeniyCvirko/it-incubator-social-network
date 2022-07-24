import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

type HeaderPropsType = {
    login: string
    isAuth: boolean
    logout: () => void
}

export const Header: React.FC<HeaderPropsType> = ({isAuth,login,logout}) =>{
    return(
    <header className={s.header}>
        <img src="https://mobile-review.com/articles/2019/image/echo-43/scr/10.jpg" alt=""/>
        <div className={s.auth}>
            { isAuth ?
                <div> {login} - <button onClick={logout}> log out </button></div> :
                <NavLink to='/login'>Login</NavLink>
            }
        </div>
    </header>
    )
}
