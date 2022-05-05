import c from './Dialogs.module.css'
import {DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem,} from "./MessageItem/MessageItem";
import { DialogsPageType} from "../../redux/state";
import React, {ChangeEvent,KeyboardEvent} from "react";

export type DialogsPropsType = {
    data: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    let textareaValue = React.createRef<any>();

    const addPostHandler = () => {
        let newMessage = textareaValue.current.value
        props.data.addMessage(newMessage)
        props.data.updateMessage('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.data.updateMessage(e.currentTarget.value)
    }

    const onKeyHandler = (e:KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.ctrlKey){
            addPostHandler()
        }
    }

    return (
        <div className={c.dialogs}>
            <DialogsItem dialogsData={props.data.dialogsData}/>
            <div className={c.messages}>
                <MessageItem messagesData={props.data.messagesData}/>
                <textarea className={c.textarea}
                          onKeyPress={onKeyHandler}
                          onChange={onChangeHandler}
                          value={props.data.newMessage}
                          ref={textareaValue}
                />
                <button onClick={addPostHandler} className={c.button}>add Post</button>

            </div>

        </div>
    )
}