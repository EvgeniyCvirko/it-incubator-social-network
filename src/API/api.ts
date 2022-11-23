import axios from "axios";

export type ResponseType<D = {}> ={
  resultCode: number,
  messages: string [],
  data: D
}

export const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "adcfde77-24ec-4f29-9821-c3a1b9dacd02"
        },
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
    }
)