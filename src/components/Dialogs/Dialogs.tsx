import c from './Dialogs.module.css'
import {DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem,} from "./MessageItem/MessageItem";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogsPageType} from "../../redux/store";

export type DialogsPropsType = {
    updateMessage: (newMessage: string) => void
    addMessage: (message: string) => void
    items: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    let textareaValue = React.createRef<any>();

    const addMessageHandler = () => {
        let newMessage = textareaValue.current.value
        props.addMessage(newMessage)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(e.currentTarget.value)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessageHandler()
        }
    }

    return (
        <div className={c.dialogs}>
            <DialogsItem dialogsData={props.items.dialogsData}/>
            <div className={c.messages}>
                <MessageItem messagesData={props.items.messagesData}/>
                <textarea className={c.textarea}
                          onKeyPress={onKeyHandler}
                          onChange={onChangeHandler}
                          value={props.items.newMessage}
                          placeholder='Next string = ctrEnter'
                          ref={textareaValue}
                />
                <button onClick={addMessageHandler} className={c.button}>add Message</button>

            </div>

        </div>
    )
}