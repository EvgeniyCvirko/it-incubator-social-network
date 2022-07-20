import React from 'react';
import './AddPost.css';
import {addPostAC} from "../../../../redux/ProfilePageReducer";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux_store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    newPostText: string
}
type MapDispatchToPropsType ={
    addPost: (text: string | undefined) => void
}

let mapStateToProps = (store: AppStateType): MapStateToPropsType  => {
    return{
        newPostText: store.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType=> {
    return{
        addPost : (text: string | undefined)=>{
            dispatch(addPostAC(text))
        }
    }
}

export const AddPostContainer = connect (mapStateToProps, mapDispatchToProps)(AddPost);