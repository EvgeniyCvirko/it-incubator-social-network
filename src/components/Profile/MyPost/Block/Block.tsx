import React, {ChangeEvent,KeyboardEvent} from 'react';
import './Block.css';
import {ProfilePageType} from "../../../../redux/state";

type BlockPropsType = {
    data:  ProfilePageType,
}


export const Block = (props: BlockPropsType) => {
    let newPostElement = React.createRef<any>()

    const addPost = () => {
        let text = newPostElement.current.value
        props.data.addPost(text)
        props.data.updateNewPost('')
    }
   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.data.updateNewPost(e.currentTarget.value)
    }
    const onKeyHandler = (e:KeyboardEvent<HTMLTextAreaElement>) =>{
        if( e.ctrlKey){
            addPost()
        }
    }
    const addPostHandler = () => {
        addPost()
    }
    return (
        <div className='block'>
            <textarea value={props.data.newPostText} onKeyPress={onKeyHandler} onChange={onChangeHandler} ref={newPostElement}/>
            <div className="block_button">
                <button onClick={addPostHandler} className="button">Add Post</button>
            </div>
        </div>
    )
}