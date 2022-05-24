import React from 'react';
import './Block.css';
import {addPostAC, UpdateNewPosAC} from "../../../../redux/ProfilePageReducer";
import { StoreType} from "../../../../redux/store";
import {Block} from "./Block";
import {AddMessageAC, updateMessageAC} from "../../../../redux/DialoguesPageReducer";
import {connect} from "react-redux";

// type BlockContainerPropsType = {
//     data: StoreType
// }

/*export const BlockContainer = (props: BlockContainerPropsType ) => {
    let state = props.data.getState()
    const addNewPost = (text: string | undefined) => {
        props.data.dispatch(addPostAC(text))
        props.data.dispatch(UpdateNewPosAC(""))
    }
    const onChangeHandler = (newText: string) => {
        props.data.dispatch({type: 'Update_New_Post', newText: newText})
    }
    return <Block addPost={addNewPost} updateNewPost={onChangeHandler} newPostText={state.profilePage.newPostText}/>
}*/

let mapStateToProps = (store: StoreType) => {
    return{
        newPostText: store.getState().profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateMessage : (newText: string)=>{
            dispatch(UpdateNewPosAC(newText))
        },
        addPost : (text: string | undefined)=>{
            dispatch(addPostAC(text))
            dispatch(UpdateNewPosAC(""))
        }
    }
}

export const BlockContainer = connect (mapStateToProps, mapDispatchToProps)(Block);