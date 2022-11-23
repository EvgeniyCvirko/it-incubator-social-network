import React from 'react';
import {Pagination} from '../common/pagination/Pagination';
import {User} from './User/User';
import {UsersType} from '../../types/types';

export type UsersPropsType = {
  users: UsersType[]
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
      {props.users.map(u => <User key={u.id}
                                  user={u}
                                  followingInProgress={props.followingInProgress}
                                  followUser={props.followUser}
                                  unFollowUser={props.unFollowUser}
        />
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
