import c from "../Dialogs.module.css";
import {MessagesData} from '../../../types/types';

export type MessageItemPropsType={
    messagesData:Array<MessagesData>
}

export const MessageItem = (props:MessageItemPropsType) => {
    let messageItem = props.messagesData.map((e,i) => <p className={c.message} key={i}>{e.message}</p> )
    return (
        <div >
            {messageItem}
        </div>
    )
}