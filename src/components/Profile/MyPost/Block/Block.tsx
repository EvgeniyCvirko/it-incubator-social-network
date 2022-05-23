import React, {ChangeEvent,KeyboardEvent} from 'react';
import './Block.css';

type BlockPropsType = {
    newPostText:  string,
    addPost: (text: string | undefined) => void
    updateNewPost : (text: string ) => void
}


export const Block = (props: BlockPropsType ) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text)
    }
   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.updateNewPost(e.currentTarget.value)
    }
    const onKeyHandler = (e:KeyboardEvent<HTMLTextAreaElement>) =>{
        if( e.key === 'Enter'){
            addNewPost()
        }
    }
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