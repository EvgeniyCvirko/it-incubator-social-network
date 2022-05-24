import c from './Dialogs.module.css'
import { AddMessageAC,  updateMessageAC} from "../../redux/DialoguesPageReducer";
import React from "react";
import {store, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

export type DialogsPropsType = {
    data: StoreType,
}

/*export const DialogsContainer: React.FC<DialogsPropsType> = ({data,}) => {
    const addMessage = (message: string) => {
        data.dispatch(AddMessageAC(message))
        data.dispatch(updateMessageAC(''))
    }

    const updateMessage = (newMessage: string) => {
        data.dispatch(updateMessageAC(newMessage))
    }
    return (
        <div className={c.dialogs}>
            <Dialogs  updateMessage={updateMessage} addMessage={addMessage} items={data.getState().dialogsPage}/>
        </div>
    )
}*/
let mapStateToProps = (store: StoreType) => {
    return{
        items: store.getState().dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateMessage : (newMessage: string)=>{
            dispatch(updateMessageAC(newMessage))
        },
        addMessage : (message: string)=>{
            dispatch(AddMessageAC(message))
            dispatch(updateMessageAC(''))
        }
    }
}


export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);