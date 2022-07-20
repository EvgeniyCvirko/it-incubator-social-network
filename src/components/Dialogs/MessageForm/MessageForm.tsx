import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import c from '../Dialogs.module.css'

export type FormMessageType = {
    message: string
}

export const AddMessage: React.FC<InjectedFormProps<FormMessageType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={c.textarea}>
            <Field component='textarea' name='message' placeholder='Message' />
            </div>
            <div >
                <button >Add Message</button>
            </div>
            </form>
            )
}

export const MessageForm = reduxForm<FormMessageType>({form: 'message'})(AddMessage)