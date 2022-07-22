import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../../../../util/valodator/validators";

export type FormPostType ={
    post: string
}

const maxLengthPost50 = maxLengthCreator(50)

export const FormPost:React.FC<InjectedFormProps<FormPostType>> = (props) =>{

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='post' validate={[required, maxLengthPost50]} placeholder='Next string = ctrEnter'/>
            </div>
            <div className="block_button">
                <button >Add Post</button>
            </div>
        </form>
    )
}
export const AddFormPost = reduxForm<FormPostType>({form: 'post'})(FormPost)
