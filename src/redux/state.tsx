import {v1} from "uuid";

export type StoreType ={
    _state:RootStateType
    addPost:(post: string | undefined) => void,
    updateNewPost:(newText: string) => void,
    addMessage:(message: string) => void,
    updateMessage:(newMessage: string) => void,
    subscribe:(callback:() => void) => void,
    dispatch:(action: any) => void,
    _onChange:(_state:RootStateType) => void,
    getState:() => RootStateType,
}
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
    message: string | undefined,
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
export type ActionType={

}


export let store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hey, why nobody love me?', count: 100},
                {id: v1(), message: 'I want to be Front-end-Developer!!!', count: 500},
                {id: v1(), message: 'Ho-ho-ho', count: 50},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Victor'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Igor'},
                {id: 5, name: 'Anton'},

            ],
            messagesData: [
                {id: v1(), message: 'Сказали , что материал по-прежнему густой , но в обработке ведёт себя прекрасно'},
                {id: v1(), message: 'Помнишь к 7 на горского 56 острые козырьки?'},
                {id: v1(), message: 'к Шире едешь?'},
                {id: v1(), message: 'Да хз, завтра попиздим утром'},
                {id: v1(), message: 'Знаешь, все будет хорошо!!!'},
            ],
            newMessage: '',
        },
        sideBar: {
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
        },

    },
    addPost(post: string | undefined) {
        let newPost = {
            id: v1(),
            message: post,
            count: 25,
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange(this._state)
    },
    updateNewPost(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange(this._state)
    },
    addMessage(message: string) {
        let newMessage = {
            id: v1(), message: message
        }
        this._state.dialogsPage.messagesData.push(newMessage)
        this._onChange(this._state)
    },
    updateMessage(newMessage: string) {
        this._state.dialogsPage.newMessage = newMessage;
        this._onChange(this._state)
    },
    subscribe(callback) {
        this._onChange = callback
    },
    _onChange() {
        console.log(" state changed")
    },
    dispatch(){

    },
    getState(){
        return this._state;
    }
}




