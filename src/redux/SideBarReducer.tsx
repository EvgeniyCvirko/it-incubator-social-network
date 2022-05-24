
export type SideBarType = {
    list: Array<List>,
    friends: Array<Friends>,
}
type List = {
    id: number,
    namePage: string,
}
type Friends = {
    avatar: string,
    name: string,
}

let initialState = {
    list: [
        {id: 1, namePage: 'Profile'},
        {id: 2, namePage: 'Message'},
        {id: 3, namePage: 'News'},
        {id: 4, namePage: 'Music'},
        {id: 5, namePage: 'Settings'},
    ],
    friends: [
        {avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Sasha"},
        {avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Victor"},
        {avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Dima"},
    ],
}

export const sideBarReducer = (state: SideBarType = initialState, action: any ): SideBarType=> {

    return state;
}
