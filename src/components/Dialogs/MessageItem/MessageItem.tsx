import c from "../Dialogs.module.css";
import {MessagesData} from "../../../redux/store";
export type MessageItemPropsType={
    messagesData:Array<MessagesData>
}

export const MessageItem = (props:MessageItemPropsType) => {
    let messageItem = props.messagesData.map(e => <p className={c.message}>{e.message}</p> )
    return (
        <div >
            {messageItem}
        </div>
    )
}