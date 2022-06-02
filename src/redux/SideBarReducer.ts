import {v1} from "uuid";

export type SideBarType = {
    list: Array<List>,
    friends: Array<FriendsType>,
}
type List = {
    id: string,
    namePage: string,
}
export type FriendsType = {
    id: string
    avatar: string,
    name: string,
}

let initialState = {
    list: [
        {id: v1(), namePage: 'Profile'},
        {id: v1(), namePage: 'Message'},
        {id: v1(), namePage: 'News'},
        {id: v1(), namePage: 'Music'},
        {id: v1(), namePage: 'Settings'},
        {id: v1(), namePage: 'Users'},
    ],
    friends: [
        { id:v1(), avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Sasha"},
        { id:v1(), avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Victor"},
        { id:v1(), avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Dima"},
    ],
}

export const sideBarReducer = (state: SideBarType = initialState, action: any ): SideBarType=> {

    return state;
}
