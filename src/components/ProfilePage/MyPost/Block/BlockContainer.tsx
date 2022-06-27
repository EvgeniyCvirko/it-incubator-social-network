import React from 'react';
import './Block.css';
import {addPostAC, UpdateNewPosAC} from "../../../../redux/ProfilePageReducer";
import {Block} from "./Block";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux_store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    newPostText: string
}
type MapDispatchToPropsType ={
    updateNewPost: (newText: string) => void
    addPost: (text: string | undefined) => void
}

let mapStateToProps = (store: AppStateType): MapStateToPropsType  => {
    return{
        newPostText: store.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType=> {
    return{
        updateNewPost : (newText: string)=>{
            dispatch(UpdateNewPosAC(newText))
        },
        addPost : (text: string | undefined)=>{
            dispatch(addPostAC(text))
            dispatch(UpdateNewPosAC(""))
        }
    }
}

export const BlockContainer = connect (mapStateToProps, mapDispatchToProps)(Block);