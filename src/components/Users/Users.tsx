import React from 'react';
import {UsersType} from "../../redux/UsersReducer";
import photoUser from '../../redux/Icon/User.svg.png'
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    items: UsersType[]
    changeFollowed: (id: string) => void
    onPageChanged: (page: number) => void
    changeUnFollowed: (id: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}


export const Users = (props: UsersPropsType) => {
    let page = []
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    return (
        <div>
            {page.map(p => {
                return <span className={props.currentPage === p ? s.PageActive : s.Page} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}

            {
                props.items.map(u => {
                        const changeFollowedHandler = () => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,{},
                                {withCredentials: true,
                                    headers: {
                                        "API-KEY": "64057af6-0e83-4806-9023-16837f4ae3e0"
                                    },
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {

                                    }
                                })
                            props.changeFollowed(u.id)
                        }
                            const changeUnFollowedHandler = () => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                    {withCredentials: true,
                                    headers: {
                                        "API-KEY": "64057af6-0e83-4806-9023-16837f4ae3e0"
                                    },
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.changeUnFollowed(u.id)
                                        }
                                    })

                            }
                            return (
                                <div key={u.id} className={s.User}>
                                    <div className={s.LeftBlock}>
                                        <div>
                                            <NavLink to={`/profile/${u.id}`}>
                                                <img src={u.photos.small !== null ? u.photos.small : photoUser} alt=''/>
                                            </NavLink>
                                        </div>
                                        <div>
                                            {u.followed
                                                ? <button onClick={changeUnFollowedHandler}>UnFollow</button>
                                                : <button onClick={changeFollowedHandler}>Follow</button>}
                                        </div>
                                    </div>
                                    <div className={s.RightBlock}>
                                        <div>
                                            <div>{u.name}</div>
                                            <div>{u.status}</div>
                                        </div>
                                        <div>
                                            <div>{'u.location.city'}</div>
                                            <div>{'u.location.country'}</div>
                                        </div>
                                    </div>
                                </div>)
                        }

                )
                }
                </div>
                )
            }
