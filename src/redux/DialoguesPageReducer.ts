import {v1} from "uuid";
import {DialogsPageType} from '../types/types';
//type
type ActionTypeDialogsPage = ReturnType<typeof AddMessageAC>
//state
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
//reducers
export const dialogsPageReducer = (state = initialState, action: ActionTypeDialogsPage): DialogsPageType => {
        switch (action.type) {
            case 'Add-Message': {
                let newMessage = {
                    id: v1(), message: action.message
                }
                let stateCopy = {...state}
                stateCopy.messagesData = [...stateCopy.messagesData, newMessage]
                return stateCopy;
            }

        }
    return state;
}
//actions
export const AddMessageAC = (message: string) => {
    return {
        type: "Add-Message",
        message: message
    } as const
}
