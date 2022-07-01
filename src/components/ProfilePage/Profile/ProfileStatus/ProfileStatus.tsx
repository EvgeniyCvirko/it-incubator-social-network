import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType ={
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editeMode:false,
        status: this.props.status
    }
    onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {

        this.setState({
            status: e.currentTarget.value
        })
        console.log( typeof(this.state.status))
    }

    activatedInput = () => {  //объявил метод стрелочной функцией
        this.setState({
            editeMode: true
        })
    }
    deActivatedInput (){  //обязательно привязать контекст this.deActivatedInput.bind(this)
        this.setState({
            editeMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    render(){

       return ( <div className={s.profileStatus}>
               {this.state.editeMode
               ?
               <div>
                   status: <input onChange={this.onChangeHandler} autoFocus={true} onBlur={this.deActivatedInput.bind(this)} value={this.state.status}/>
               </div>
               :
               <div>
                   <span onClick={this.activatedInput}> status: {this.props.status}</span>
               </div>
               }
           </div>
       )
    }
}