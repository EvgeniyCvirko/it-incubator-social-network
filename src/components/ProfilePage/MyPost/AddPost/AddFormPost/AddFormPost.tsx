import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormPostType ={
    post: string
}


export const FormPost:React.FC<InjectedFormProps<FormPostType>> = (props) =>{

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='post' placeholder='Next string = ctrEnter'/>
            </div>
            <div className="block_button">
                <button >Add Post</button>
            </div>
        </form>
    )
}
export const AddFormPost = reduxForm<FormPostType>({form: 'post'})(FormPost)
