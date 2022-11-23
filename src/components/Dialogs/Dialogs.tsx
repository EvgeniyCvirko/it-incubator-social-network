import c from './Dialogs.module.css'
import {DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem,} from "./MessageItem/MessageItem";
import React from "react";
import {FormMessageType, MessageForm} from "./MessageForm/MessageForm";
import {DialogsPageType} from '../../types/types';

export type DialogsPropsType = {
    addMessage: (message: string) => void
    items: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const addMessageHandler = (formData: FormMessageType) => {
        props.addMessage(formData.message)
    }
    return (
        <div className={c.dialogs}>
           <DialogsItem dialogsData={props.items.dialogsData}/>
            <div className={c.messages}>
                <MessageItem messagesData={props.items.messagesData}/>
                <MessageForm  onSubmit={addMessageHandler}/>
            </div>

        </div>
    )
}