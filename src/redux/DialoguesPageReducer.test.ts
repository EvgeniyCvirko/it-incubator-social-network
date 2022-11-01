import {v1} from "uuid";
import {AddMessageAC, dialogsPageReducer} from "./DialoguesPageReducer";

let startState = {
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

test ('messages after add', () =>{
    const action = AddMessageAC('new message')
    const endState = dialogsPageReducer(startState, action)
    expect(endState.messagesData.length).toBe(6)
    expect(endState.messagesData[5].message).toBe('new message')
})
