import axios from "axios";


const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "64057af6-0e83-4806-9023-16837f4ae3e0"
        },
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
    }
)

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    }

}