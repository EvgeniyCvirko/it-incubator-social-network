import React, {ChangeEvent,KeyboardEvent} from 'react';
import './Block.css';
import {addPostAC, UpdateNewPosAC} from "../../../../redux/ProfilePageReducer";
import {ActionType, StoreType} from "../../../../redux/store";
import {Block} from "./Block";

type BlockContainerPropsType = {
    // newPostText:  string,
    // dispatch:(action: ActionType) => void
    data: StoreType
}


export const BlockContainer = (props: BlockContainerPropsType ) => {
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    let state = props.data.getState()

    const addNewPost = (text: string | undefined) => {
        // let text = newPostElement.current?.value
        props.data.dispatch(addPostAC(text))
        props.data.dispatch(UpdateNewPosAC(""))
    }
    const onChangeHandler = (newText: string) => {
        props.data.dispatch({type: 'Update_New_Post', newText: newText})
    }
    /*const onKeyHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addNewPost()
        }
    }*/
    /*const addPostHandler = () => {
        addNewPost()
    }*/
    return <Block addPost={addNewPost} updateNewPost={onChangeHandler} newPostText={state.profilePage.newPostText}/>
}