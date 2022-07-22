import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from './FormControl.module.css'

export const Textarea: React.FC<WrappedFieldProps> = ({input,meta: { touched, error }, children}) =>{

    const hasError = touched && error
    return(<>
            <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
                <textarea {...input} />
            </div>
            <div className={s.error}>
                {hasError &&  <span>{error}</span>}
            </div>
        </>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input,meta: { touched, error }, children}) =>{

    const hasError = touched && error
    return(<>
            <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
                <input {...input}/>
            </div>
            <div className={s.error}>
                {hasError &&  <span>{error}</span>}
            </div>
        </>
    )
}