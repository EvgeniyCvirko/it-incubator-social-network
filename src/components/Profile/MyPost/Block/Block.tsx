import React, {ChangeEvent,KeyboardEvent} from 'react';
import './Block.css';
import {ActionType} from "../../../../redux/state";

type BlockPropsType = {
    newPostText:  string,
    dispatch:(action: ActionType) => void
}


export const Block: React.FC <BlockPropsType> = ({newPostText, dispatch }) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        let text = newPostElement.current?.value
        // addPost(text)
        dispatch({type: 'ADD_Post', post: text})
        // updateNewPost('')
        dispatch ({type: 'Update_New_Post', newText: '' })
    }
   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       // updateNewPost(e.currentTarget.value)
       dispatch ({type: 'Update_New_Post', newText: e.currentTarget.value })
    }
    const onKeyHandler = (e:KeyboardEvent<HTMLTextAreaElement>) =>{
        if( e.key === 'Enter'){
            addNewPost()
        }
    }
    const addPostHandler = () => {
        addNewPost()
    }
    return (
        <div className='block'>
            <textarea value={newPostText}
                      onKeyPress={onKeyHandler}
                      onChange={onChangeHandler}
                      placeholder='Next string = ctrEnter'
                      ref={newPostElement}/>
            <div className="block_button">
                <button onClick={addPostHandler} className="button">Add Post</button>
            </div>
        </div>
    )
}