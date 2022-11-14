import React from 'react';
import photoUser from '../../../redux/Icon/User.svg.png'
import s from './User.module.css'
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../../redux/UsersReducer';

export type UsersPropsType = {
  user: UsersType
  followingInProgress: Array<string>
  followUser: (userId: string) => void
  unFollowUser: (userId: string) => void
}

export const User: React.FC<UsersPropsType> = ({user, followingInProgress,followUser,unFollowUser}) => {
  const followedHandler = () => followUser(user.id)
  const unFollowedHandler = () => unFollowUser(user.id)
  return (
              <div  className={s.User}>
                <div className={s.LeftBlock}>
                  <div>
                    <NavLink to={`/profile/${user.id}`}>
                      <img src={user.photos.small !== null ? user.photos.small : photoUser} alt=""/>
                    </NavLink>
                  </div>
                  <div>
                    {user.followed
                      ? <button disabled={followingInProgress.some(e => e === user.id)}
                                onClick={unFollowedHandler}>UnFollow</button>
                      : <button disabled={followingInProgress.some(e => e === user.id)}
                                onClick={followedHandler}>Follow</button>}
                  </div>
                </div>
                <div className={s.RightBlock}>
                  <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                  </div>
                  <div>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                  </div>
                </div>
              </div>)
}
