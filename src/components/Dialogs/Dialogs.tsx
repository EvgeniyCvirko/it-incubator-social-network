import c from './Dialogs.module.css'
import {DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem,} from "./MessageItem/MessageItem";
import {ActionType, DialogsPageType} from "../../redux/state";
import React, {ChangeEvent, KeyboardEvent} from "react";

export type DialogsPropsType = {
    data: DialogsPageType
    dispatch:(action: ActionType) => void
    /*addMessage:(message: string) => void
    updateMessage:(newMessage: string) => void*/
}

export const Dialogs: React.FC<DialogsPropsType> = ({data, dispatch,}) => {
    let textareaValue = React.createRef<any>();

    const addMessageHandler = () => {
        let newMessage = textareaValue.current.value
        // addMessage(newMessage)
        dispatch({type:'Add_Message', message: newMessage})
        // updateMessage('')
        dispatch({type: 'Update_Message', newMessage: ''})

    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // updateMessage(e.currentTarget.value)
        dispatch({type: 'Update_Message', newMessage: e.currentTarget.value})
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