import React, {ChangeEvent, useState} from 'react';
import './Block.css';

type BlockPropsType={
    addPost: (post: string)=> void,
}


export const Block = (props:BlockPropsType) =>{
    // let textareaValue = React.createRef<HTMLTextAreaElement>()
    const [post, setPost] = useState('')
    const textareaValue = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setPost(e.currentTarget.value);
    }

     const addPostHandler = () => {
        // let post = textareaValue.current?.value;
       props.addPost(post)
         setPost('')

    }
    return(
        <div className='block'>
            <textarea value={post} onChange={textareaValue} >new post</textarea>
            <div className="block_button">
                <button onClick={addPostHandler} className="button">Add Post</button>
            </div>
        </div>
    )
}