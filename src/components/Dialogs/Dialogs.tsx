import c from './Dialogs.module.css'

export const Dialogs = () =>{
    return(
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                <div className={c.dialog}>Sasha</div>
                <div className={c.dialog}>Victor</div>
                <div className={c.dialog}>Dima</div>
                <div className={c.dialog + " " + c.active}>Igor</div>
                <div className={c.dialog}>Anton</div>
                <div className={c.dialog} >Vanya</div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Привет, как сам?</div>
                <div className={c.message}>Сказали , что сперма по-прежнему густая , но в обработке ведёт себя прекрасно</div>
                <div className={c.message}>Помнишь к 7 на горского 56 острые козырьки?</div>
                <div className={c.message}>Ты завтра к Шире едешь?</div>
                <div className={c.message}>Да хз, завтра попиздим утром</div>
            </div>
        </div>
    )
}