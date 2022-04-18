import {NavLink} from 'react-router-dom'
import c from './Dialogs.module.css'
import {DialogsItem,} from "./DialogsItem/DialogsItem";
import {MessageItem,} from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../redux/state";

export type DialogsPropsType = {
    data: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={c.dialogs}>
                 <DialogsItem dialogsData={props.data.dialogsData}/>
            <div className={c.messages}>
                <MessageItem messagesData={props.data.messagesData}/>
            </div>
        </div>
    )
}