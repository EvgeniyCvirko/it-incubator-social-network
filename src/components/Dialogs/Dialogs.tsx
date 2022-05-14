import c from './Dialogs.module.css'
import {DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem,} from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../redux/state";
import React, {ChangeEvent, KeyboardEvent} from "react";

export type DialogsPropsType = {
    data: DialogsPageType
    addMessage:(message: string) => void
    updateMessage:(newMessage: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({data, addMessage,updateMessage,}) => {
    let textareaValue = React.createRef<any>();

    const addPostHandler = () => {
        let newMessage = textareaValue.current.value
        addMessage(newMessage)
        updateMessage('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateMessage(e.currentTarget.value)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        console.log(e)
        if (e.key === 'Enter') {
            addPostHandler()
        }
    }

    return (
        <div className={c.dialogs}>
            <DialogsItem dialogsData={data.dialogsData}/>
            <div className={c.messages}>
                <MessageItem messagesData={data.messagesData}/>
                <textarea className={c.textarea}
                          onKeyPress={onKeyHandler}
                          onChange={onChangeHandler}
                          value={data.newMessage}
                          placeholder='Next string = ctrEnter'
                          ref={textareaValue}
                />
                <button onClick={addPostHandler} className={c.button}>add Post</button>

            </div>

        </div>
    )
}