import c from "../Dialogs.module.css";
import {MessagesData} from "../../../redux/DialoguesPageReducer";
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