import {v1} from "uuid";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type PostsType = {
    id: string,
    message: string | undefined,
    count: number,
}
export type ActionProfilePageType = ReturnType<typeof addPostAC> |
    ReturnType<typeof UpdateNewPosAC>

const ADD_Post = "ADD_Post";
const Update_New_Post = "Update_New_Post";

let initialState ={
    posts: [
        {id: v1(), message: 'Hey, why nobody love me?', count: 100},
        {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
        {id: v1(), message: 'Ho-ho-ho', count: 50},
    ],
    newPostText: '',
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionProfilePageType) => {
        if (action.type === ADD_Post) {
            let newPost = {
                id: v1(),
                message: action.post,
                count: 25,
            }
            state.posts.push(newPost)
            return state;
        } else if (action.type === Update_New_Post) {
            state.newPostText = action.newText;
            return state;
        }

    return state;
}
export const addPostAC = (text: string | undefined) => {
    return {
        type: "ADD_Post",
        post: text
    } as const
}
export const UpdateNewPosAC = (newMessage: string) => {
    return {
        type: "Update_New_Post",
        newText: newMessage
    } as const
}