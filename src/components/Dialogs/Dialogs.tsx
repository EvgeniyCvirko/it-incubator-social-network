import {NavLink} from 'react-router-dom'
import c from './Dialogs.module.css'
import {DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem,} from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../redux/state";
import React, {createRef} from "react";

export type DialogsPropsType = {
    data: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    let textareaValue  = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = ()=>{
        let text = textareaValue.current?.value
        alert(text)
          }

    return (
        <div className={c.dialogs}>
                 <DialogsItem dialogsData={props.data.dialogsData}/>
            <div className={c.messages}>
                <MessageItem messagesData={props.data.messagesData}/>
                <textarea ref={textareaValue} className={c.textarea}></textarea>
                <button onClick={addPostHandler} className={c.button}>add Post</button>

            </div>

        </div>
    )
}