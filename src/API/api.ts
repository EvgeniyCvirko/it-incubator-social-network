import axios from "axios";


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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    postUsers(id: string){
      return instance.post(`follow/${id}`, {}).then(response => {
          return response.data
      })
    },
    deleteUsers(id: string){
        return instance.delete(`follow/${id}`, {}).then(response => {
            return response.data
        })
    }

}
export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
}
export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getUserStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status:string){
        return instance.put(`profile/status/`,{status: status})
    },
}

