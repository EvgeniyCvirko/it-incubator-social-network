export type UsersPageType ={
    users: UsersType[]
}
export type UsersType = {
    id: string
    photoUser: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type LocationType = {
    country: string,
    city: string,
}


export type ActionUsersPageType = ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof setUsersAC>


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
