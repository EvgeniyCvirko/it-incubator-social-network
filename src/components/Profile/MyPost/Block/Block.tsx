import React, {ChangeEvent,KeyboardEvent} from 'react';
import './Block.css';
import {addPostAC, UpdateNewPosAC} from "../../../../redux/ProfilePageReducer";
import {ActionType} from "../../../../redux/store";

type BlockPropsType = {
    newPostText:  string,
    // dispatch:(action: ActionType) => void
    addPost: (text: string | undefined) => void
    updateNewPost : (text: string ) => void
}


export const Block = (props: BlockPropsType ) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        let text = newPostElement.current?.value
        // dispatch(addPostAC(text))
        // dispatch(UpdateNewPosAC(""))
        props.addPost(text)
    }
   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       // props.dispatch ({type: 'Update_New_Post', newText: e.currentTarget.value })
       props.updateNewPost(e.currentTarget.value)
    }
    const onKeyHandler = (e:KeyboardEvent<HTMLTextAreaElement>) =>{
        if( e.key === 'Enter'){
            addNewPost()
        }
    }
    /*const addPostHandler = () => {
        addNewPost()
    } Скорее всего можно будет удалить*/
    return (
        <div className='block'>
            <textarea value={props.newPostText}
                      onKeyPress={onKeyHandler}
                      onChange={onChangeHandler}
                      placeholder='Next string = ctrEnter'
                      ref={newPostElement}/>
            <div className="block_button">
                <button onClick={addNewPost} className="button">Add Post</button>
            </div>
        </div>
    )
}