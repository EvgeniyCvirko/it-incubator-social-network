import {v1} from "uuid";

export type UsersPageType ={
    users: UsersType[]
}
export type UsersType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type PhotosType = {
    small:string | null
    large:string | null
}
export type LocationType = {
    country: string,
    city: string,
}


export type ActionUsersPageType = ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof setUsersAC>
/*[
    {id: v1(), followed: false, fullName: "Dmitriy", status: "I am boss", location:{ country: "Belarus", city: 'Minsk' } , photoUser: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png', },
    {id: v1(),  followed: false, fullName: "Elena", status: "I am lady", location:{ country: "Germany", city: 'Hamburg' }, photoUser: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png', },
    {id: v1(), followed: true, fullName: "Sasha", status: "I am boss too", location:{ country: "Ukraine", city: 'Kiev' },  photoUser: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png', },
    {id: v1(), followed: true, fullName: "Igor", status: "I am boss too", location:{ country: "Brazilian", city: 'San Paulo' }, photoUser: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png', },
]*/

let initialState ={
    users: [],
}

export const usersPageReducer = (state: UsersPageType = initialState, action: ActionUsersPageType):UsersPageType => {

    switch (action.type) {
        case "Follow" :
            return {
                ...state,
                users: state.users.map(u => u.id === action.IdUser ? {...u, followed: true} : u)
            }
        case "UnFollow" :
            return {
                ...state,
                users: state.users.map(u => u.id === action.IdUser ? {...u, followed: false} : u)
            };
        case "SetUsers" :
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}
export const FollowAC = (IdUser: string) => ({type: "Follow", IdUser} as const);
export const UnFollowAC = (IdUser: string) => ({type: "UnFollow", IdUser} as const);
export const setUsersAC = (users: UsersType[]) => ({type: "SetUsers", users} as const);
