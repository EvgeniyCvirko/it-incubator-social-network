import React from 'react';
import {UsersType} from '../../redux/UsersReducer';
import photoUser from '../../redux/Icon/User.svg.png'
import s from './Users.module.css'
import {NavLink} from 'react-router-dom';
import {Pagination} from '../common/pagination/Pagination';

export type UsersPropsType = {
  items: UsersType[]
  onPageChanged: (page: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  followingInProgress: Array<string>
  setFollowingInProgress: (userId: string, isFollowing: boolean) => void
  followUser: (userId: string) => void
  unFollowUser: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {

  return (
    <div>
      {
        props.items.map(u => {
            const followedHandler = () => props.followUser(u.id)
            const unFollowedHandler = () => props.unFollowUser(u.id)
            return (
              <div key={u.id} className={s.User}>
                <div className={s.LeftBlock}>
                  <div>
                    <NavLink to={`/profile/${u.id}`}>
                      <img src={u.photos.small !== null ? u.photos.small : photoUser} alt=""/>
                    </NavLink>
                  </div>
                  <div>
                    {u.followed
                      ? <button disabled={props.followingInProgress.some(e => e === u.id)}
                                onClick={unFollowedHandler}>UnFollow</button>
                      : <button disabled={props.followingInProgress.some(e => e === u.id)}
                                onClick={followedHandler}>Follow</button>}
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
      <Pagination currentPage={props.currentPage}
                  onPageChanged={props.onPageChanged}
                  pageSize={props.pageSize}
                  totalUsersCount={props.totalUsersCount}
      />
    </div>
  )
}
