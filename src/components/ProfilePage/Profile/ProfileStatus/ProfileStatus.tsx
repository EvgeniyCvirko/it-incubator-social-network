import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType ={
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props:ProfileStatusPropsType)=> {
    let [editeMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)
     useEffect(()=>{
         setStatus(props.status)
     },[props.status])
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const activatedInput = () => {
        setEditMode(true)
    }
    const deActivatedInput = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

       return ( <div className={s.profileStatus}>
               {editeMode
               ?
               <div>
                   status: <input onChange={onChangeHandler} autoFocus={true} onBlur={deActivatedInput.bind(this)} value={status}/>
               </div>
               :
               <div>
                   <span onClick={activatedInput}> status: {props.status}</span>
               </div>
               }
           </div>
       )
}