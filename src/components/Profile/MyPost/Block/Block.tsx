import React, {ChangeEvent,KeyboardEvent} from 'react';
import './Block.css';

type BlockPropsType = {
    newPostText:  string,
    addPost:(post: string | undefined) => void,
    updateNewPost:(newText: string) => void,
}


export const Block: React.FC <BlockPropsType> = ({newPostText, addPost, updateNewPost }) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        let text = newPostElement.current?.value
        addPost(text)
        updateNewPost('')
    }
   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       updateNewPost(e.currentTarget.value)
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