import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import c from '../Dialogs.module.css'
import {Textarea} from "../../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../../util/valodator/validators";

export type FormMessageType = {
    message: string
}
const maxLengthMessage10 = maxLengthCreator(10)

export const AddMessage: React.FC<InjectedFormProps<FormMessageType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={c.textarea}>
            <Field component={Textarea} name='message' placeholder='Message' validate={[required, maxLengthMessage10]} />
            </div>
            <div >
                <button >Add Message</button>
            </div>
            </form>
            )
}

export const MessageForm = reduxForm<FormMessageType>({form: 'message'})(AddMessage)