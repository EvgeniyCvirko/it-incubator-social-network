import {NavLink} from 'react-router-dom'
import c from './Dialogs.module.css'
import {DialogsDataPropsType, DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem, MessagesDataPropsType,} from "./MessageItem/MessageItem";

export type DialogsPropsType={
    messagesData:  Array<MessagesDataPropsType>,
    dialogsData: Array<DialogsDataPropsType>,
}

export const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={c.dialogs}>
             <DialogsItem dialogsData={props.dialogsData}/>
            <div className={c.messages}>
                <MessageItem messagesData={props.messagesData}/>
            </div>
        </div>
    )
}