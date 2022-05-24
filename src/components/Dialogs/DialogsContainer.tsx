import c from './Dialogs.module.css'
import {AddMessageAC, DialogsPageType, updateMessageAC} from "../../redux/DialoguesPageReducer";
import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {Dispatch} from "redux";

/*export type DialogsPropsType = {
    data: StoreType,
}*/

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
type MapStateToPropsType = {
    items: DialogsPageType
}
type MapDispatchToPropsType ={
    updateMessage: (newMessage: string) => void
    addMessage: (message: string ) => void
}

let mapStateToProps = (store: AppStateType): MapStateToPropsType => {
    return{
        items: store.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
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