import {FormDataType} from '../components/Login/LoginForm/LoginForm';
import {instance, ResponseType} from './api';

type GetAuthDataType = {
    id: number,
    email: string,
    login: string
}

export const authAPI = {
    getAuth(){
        return instance.get<ResponseType<GetAuthDataType>>(`auth/me`).then(response => {
            return response.data
        })
    },
    postLogin(data: FormDataType){
        return instance.post<ResponseType<{userId: number}>>(`auth/login`,data).then(response => {
            return response.data
        })
    },
    deleteLogin(){
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }

}


