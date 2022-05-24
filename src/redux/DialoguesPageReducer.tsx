import {v1} from "uuid";
import {addPostAC, UpdateNewPosAC} from "./ProfilePageReducer";

export type DialogsPageType = {
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
type ActionTypeDialogsPage =
    ReturnType<typeof AddMessageAC> |
    ReturnType<typeof updateMessageAC>
const Add_Message = 'Add_Message';
const Update_Message = 'Update_Message';
let initialState = {
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
}

export const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionTypeDialogsPage) => {
        switch (action.type) {
            case Add_Message:
                let newMessage = {
                    id: v1(), message: action.message
                }
                state.messagesData.push(newMessage)
                return state;
            case (Update_Message):
                state.newMessage = action.newMessage;
                return state;
        }
    return state;
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