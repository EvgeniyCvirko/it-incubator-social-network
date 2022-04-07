import {NavLink} from 'react-router-dom'
import c from './Dialogs.module.css'

type PropsType = {
    name: string,
    id: number,
}
const DialogsItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={c.dialogsItem}>
            <NavLink to={path} className={c.dialog}>{props.name}</NavLink>
        </div>
    )
}
type MessagePropsType = {
    text: string,
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={c.messages}>
            <p className={c.message}>{props.text}</p>
        </div>
    )
}


export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div><DialogsItem name='Sasha' id={1}/>
                <DialogsItem name='Victor' id={2}/>
                <DialogsItem name='Dima' id={3}/>
                <DialogsItem name='Igor' id={4}/>
                <DialogsItem name='Anton' id={5}/>
                <DialogsItem name='Vanya' id={6}/>
            </div>
            <div className={c.messages}>
                <Message text='Привет, как сам?'/>
                <Message text='Сказали , что сперма по-прежнему густая , но в обработке ведёт себя прекрасно'/>
                <Message text='Помнишь к 7 на горского 56 острые козырьки?'/>
                <Message text='Ты завтра к Шире едешь?'/>
                <Message text='Да хз, завтра попиздим утром'/>
            </div>
        </div>
    )
}