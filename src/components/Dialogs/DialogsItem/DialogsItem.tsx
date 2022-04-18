import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../redux/state";

type DialogsItemPropsType={
     dialogsData: Array<DialogsDataType>,
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