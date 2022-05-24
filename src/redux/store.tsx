import {v1} from "uuid";

 type StoreType = {
    _state: RootStateType
    addPost: (post: string | undefined) => void,
    updateNewPost: (newText: string) => void,
    addMessage: (message: string) => void,
    updateMessage: (newMessage: string) => void,
    subscribe: (callback: () => void) => void,
    dispatch: (action: ActionType) => void,
    _onChange: (_state: RootStateType) => void,
    getState: () => RootStateType,
}
 type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sideBar: SideBarType,

}
 type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
 type PostsType = {
    id: string,
    message: string | undefined,
    count: number,
}
 type DialogsPageType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesData>,
    newMessage: string,
}
 type DialogsDataType = {
    id: number,
    name: string,
}
 type MessagesData = {
    id: string,
    message: string,
}
 type SideBarType = {
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
 type ActionType = ReturnType<typeof addPostAC> |
                         ReturnType<typeof UpdateNewPosAC> |
                         ReturnType<typeof AddMessageAC> |
                         ReturnType<typeof updateMessageAC>

export let store: StoreType = {
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
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === "ADD_Post") {
            let newPost = {
                id: v1(),
                message: action.post,
                count: 25,
            }
            this._state.profilePage.posts.push(newPost)
            this._onChange(this._state)
        } else if (action.type === 'Update_New_Post') {
            this._state.profilePage.newPostText = action.newText;
            this._onChange(this._state)
        } else if (action.type === 'Add_Message') {
            let newMessage = {
                id: v1(), message: action.message
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._onChange(this._state)
        } else if (action.type === 'Update_Message') {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._onChange(this._state)
        }

    },
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
export const AddMessageAC = (message: string) => {
    return {
        type: "Add_Message",
        message: message
    } as const
}
export const updateMessageAC = (newMessage: string) => {
    return {
        type: "Update_Message",
        newMessage: newMessage
    } as const
}





