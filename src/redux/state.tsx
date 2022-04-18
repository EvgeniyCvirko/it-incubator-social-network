import {v1} from "uuid";
export type RootStateType={
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type PostsType={
    id: string,
    message: string,
    count: number,
}

export type DialogsPageType={
    dialogsData: Array<DialogsDataType>,
    messagesData:Array<MessagesData>
}

export type DialogsDataType={
    id: number,
    name: string,
}
export type MessagesData={
    id: number,
    message: string,
}

export let state = {
    profilePage:{
        posts:[
            {id: v1(), message: 'Hey, why nobody love me?', count: 100},
            {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
            {id: v1(), message: 'Ho-ho-ho', count: 50},
        ]
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
            {id: 1, message: 'Сказали , что материал по-прежнему густой , но в обработке ведёт себя прекрасно'},
            {id: 2, message: 'Помнишь к 7 на горского 56 острые козырьки?'},
            {id: 3, message: 'к Шире едешь?'},
            {id: 4, message: 'Да хз, завтра попиздим утром'},
            {id: 5, message: 'Знаешь, все будет хорошо!!!'},
        ],
    }
}
