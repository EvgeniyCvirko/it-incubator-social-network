import {AddMessageAC, DialogsPageType} from "../../redux/DialoguesPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    items: DialogsPageType
}
type MapDispatchToPropsType ={
    addMessage: (message: string ) => void
}

let mapStateToProps = (store: AppStateType): MapStateToPropsType => {
    return{
        items: store.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return{
       addMessage : (message: string)=>{
            dispatch(AddMessageAC(message))
        }
    }
}
export default compose<React.ComponentType>(
    connect (mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)