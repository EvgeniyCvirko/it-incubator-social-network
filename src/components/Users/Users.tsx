import React from 'react';
import {UsersType} from "../../redux/UsersReducer";
import photoUser from '../../redux/Icon/User.svg.png'
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    items: UsersType[]
    onPageChanged: (page: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<string>
    setFollowingInProgress: ( userId:string, isFollowing: boolean) => void
    followUser: (userId: string) => void
    unFollowUser: (userId: string) => void
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
                    const followedHandler = () => props.followUser(u.id)
                    const unFollowedHandler = () => props.unFollowUser(u.id)
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
                                                ? <button disabled={props.followingInProgress.some(e => e === u.id )} onClick={unFollowedHandler}>UnFollow</button>
                                                : <button disabled={props.followingInProgress.some(e => e === u.id )} onClick={followedHandler}>Follow</button>}
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
