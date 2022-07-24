import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from './FormControl.module.css'

export const Textarea: React.FC<WrappedFieldProps> = (props) =>{
   const {input,meta: { touched, error }, ...restProps} = props
    const hasError = touched && error
    return(<>
            <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
                <textarea {...input} {...restProps} />
            </div>
            <div className={s.error}>
                {hasError &&  <span>{error}</span>}
            </div>
        </>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) =>{
   const{input,meta: { touched, error }, children,...restProps} = props
    const hasError = touched && error
    return(<>
            <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
                <input {...input} {...restProps}/>
            </div>
            <div className={s.error}>
                {hasError &&  <span>{error}</span>}
            </div>
        </>
    )
}