import axios from "axios";
import {UsersType} from '../redux/UsersReducer';
import {PhotosProfileType, ProfileType} from '../redux/ProfilePageReducer';


const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "adcfde77-24ec-4f29-9821-c3a1b9dacd02"
        },
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
    }
)

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
export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    postLogin(email:string, password:string, rememberMe:boolean){
        return instance.post(`auth/login`,{email, password, rememberMe}).then(response => {
            return response.data
        })
    },
    deleteLogin(){
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }

}
export const profileAPI = {
    getProfile(userId:number){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getUserStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status:string){
        return instance.put(`profile/status/`,{status: status})
    },
    savePhoto(file: File){
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<ResponseType<{photos:PhotosProfileType }>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profile:ProfileType){
        return instance.put<ResponseType>(`profile`,profile)
    },
}

export type ResponseType<D = {}> ={
    resultCode: number,
    messages: string [],
    data: D
}

export type responseGetUsersType ={
    items: UsersType[],
    totalCount: number,
    error: string,
}