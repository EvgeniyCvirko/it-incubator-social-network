import c from './Dialogs.module.css'
import {DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem,} from "./MessageItem/MessageItem";
import {ActionType, AddMessageAC, DialogsPageType, updateMessageAC} from "../../redux/state";
import React, {ChangeEvent, KeyboardEvent} from "react";

export type DialogsPropsType = {
    data: DialogsPageType
    dispatch:(action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({data, dispatch,}) => {
    let textareaValue = React.createRef<any>();

    const addMessageHandler = () => {
        let newMessage = textareaValue.current.value
        dispatch(AddMessageAC(newMessage))
        dispatch(updateMessageAC(''))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateMessageAC(e.currentTarget.value))
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        console.log(e)
        if (e.key === 'Enter') {
            addMessageHandler()
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
                <button onClick={addMessageHandler} className={c.button}>add Message</button>

            </div>

        </div>
    )
}