import React from 'react';
import './AddPost.css';
import {AddFormPost, FormPostType} from "./AddFormPost/AddFormPost";

type AddPostPropsType = {
    newPostText:  string,
    addPost: (text: string | undefined) => void
}


export const AddPost = (props: AddPostPropsType ) => {

    const addNewPost = (formData: FormPostType) => {
        props.addPost(formData.post)
    }

    return (
        <div className='addPost'>
            <AddFormPost onSubmit={addNewPost}/>
        </div>
    )
}