import c from "../Dialogs.module.css";
export type MessageItemPropsType={
    messagesData: Array<MessagesDataPropsType>
}

export type MessagesDataPropsType={
    id: number,
    message: string,
}

export const MessageItem = (props:MessageItemPropsType) => {

    let messageItem = props.messagesData.map(e => <p className={c.message}>{e.message}</p> )
    return (
        <div className={c.messages}>
            {messageItem}
        </div>
    )
}