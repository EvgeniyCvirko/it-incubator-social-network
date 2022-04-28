import {v1} from "uuid";
import {renderedComponent} from "../render";
export type RootStateType={
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sideBar: SideBarType,
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText:string
}
export type PostsType={
    id: string,
    message: string,
    count: number,
}
export type DialogsPageType={
    dialogsData: Array<DialogsDataType>,
    messagesData:Array<MessagesData>,
    newMessage: string,
}
export type DialogsDataType={
    id: number,
    name: string,
}
export type MessagesData={
    id: string,
    message: string,
}
export type SideBarType={
    list: Array<List>,
    friends: Array<Friends>,
}
export type List={
    id: number,
    namePage: string,
}
export type Friends={
    avatar: string,
    name: string,
}
export let state = {
    profilePage:{
        posts:[
            {id: v1(), message: 'Hey, why nobody love me?', count: 100},
            {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
            {id: v1(), message: 'Ho-ho-ho', count: 50},
        ],
        newPostText: 'add ctrl+Enter'
    },
    dialogsPage:{
        dialogsData:[
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Igor'},
            {id: 5, name: 'Anton'},

        ],
        messagesData : [
            {id: v1(), message: 'Сказали , что материал по-прежнему густой , но в обработке ведёт себя прекрасно'},
            {id: v1(), message: 'Помнишь к 7 на горского 56 острые козырьки?'},
            {id: v1(), message: 'к Шире едешь?'},
            {id: v1(), message: 'Да хз, завтра попиздим утром'},
            {id: v1(), message: 'Знаешь, все будет хорошо!!!'},
        ],
        newMessage : 'Ctrl+Enter add message'
    },
    sideBar:{
        list:[
            {id: 1, namePage: 'Profile'},
            {id: 2, namePage: 'Message'},
            {id: 3, namePage: 'News'},
            {id: 4, namePage: 'Music'},
            {id: 5, namePage: 'Settings'},
        ],
        friends:[
            { avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Sasha"},
            { avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Victor"},
            { avatar: 'https://cdn-0.emojis.wiki/emoji-pics/twitter/orange-circle-twitter.png', name: "Dima"},
        ],
    }
}

export const addPost = (post: string) =>{
    let newPost={
        id: v1(),
        message: post,
        count: 25,
    }
    state.profilePage.posts.push(newPost)
    renderedComponent(state)
}
export const updateNewPost = (newText: string) =>{
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    state.profilePage.newPostText = newText;
    renderedComponent(state)
}

export const addMessage = (message: string) => {
    let newMessage = {
        id: v1(), message: message
    }
        state.dialogsPage.messagesData.push(newMessage)
    renderedComponent(state)
}

export const updateMessage = (newMessage: string) =>{
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    state.dialogsPage.newMessage = newMessage;
    renderedComponent(state)
}
