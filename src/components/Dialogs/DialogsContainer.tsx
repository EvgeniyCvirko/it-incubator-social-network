import {AddMessageAC, DialogsPageType, updateMessageAC} from "../../redux/DialoguesPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

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


export const DialogsContainer = WithAuthRedirect(connect (mapStateToProps, mapDispatchToProps) (Dialogs));