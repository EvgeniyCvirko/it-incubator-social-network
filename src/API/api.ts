import axios from "axios";


const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "64057af6-0e83-4806-9023-16837f4ae3e0"
        },
    baseURL:"https://social-network.samuraijs.com/api/1.0/"
    }
)
