import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogsItemPropsType={
    dialogsData: Array<DialogsDataPropsType>
}
export type DialogsDataPropsType ={
    id: number,
    name: string,
}



export const DialogsItem = (props:DialogsItemPropsType) => {

    let dialog = props.dialogsData.map(e => {
        let path = '/dialogs/' + e.id
          return   < NavLink to = {path} className = {c.dialog} > {e.name}</NavLink>
    })
    return (
        <div className={c.dialogsItem}>
            {dialog}
        </div>
    )
}