import React, {ChangeEvent,KeyboardEvent} from 'react';
import './Block.css';

type BlockPropsType = {
    addPost: (post: string) => void
    newPostText: string
    updateNewPost: (newText : string) => void
}


export const Block = (props: BlockPropsType) => {
    let newPostElement = React.createRef<any>()

    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        props.updateNewPost('')
    }
   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.updateNewPost(e.currentTarget.value)
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
            <textarea value={props.newPostText} onKeyPress={onKeyHandler} onChange={onChangeHandler} ref={newPostElement}/>
            <div className="block_button">
                <button onClick={addPostHandler} className="button">Add Post</button>
            </div>
        </div>
    )
}