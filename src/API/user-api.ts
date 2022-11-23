import {instance, ResponseType} from './api';
import {UsersType} from '../types/types';

export type responseGetUsersType ={
    items: UsersType[],
    totalCount: number,
    error: string,
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<responseGetUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    followUser(id: string){
      return instance.post<ResponseType>(`follow/${id}`, {}).then(response => {
          return response.data
      })
    },
    unfollowUser(id: string){
        return instance.delete<ResponseType>(`follow/${id}`, {}).then(response => {
            return response.data
        })
    }

}
