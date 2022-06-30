import React from 'react';
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType ={
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editeMode:false
    }
    activatedInput = () => {  //объявил метод стрелочной функцией
        this.setState({
            editeMode: true
        })
    }
    deActivatedInput (){  //обязательно привязать контекст this.deActivatedInput.bind(this)
        this.setState({
            editeMode: false
        })
    }
    render(){

       return ( <div className={s.profileStatus}>
               {this.state.editeMode
               ?
               <div>
                   <input autoFocus={true} onBlur={this.deActivatedInput.bind(this)} value={this.props.status}/>
               </div>
               :
               <div>
                   <span onClick={this.activatedInput}> {this.props.status}</span>
               </div>
               }
           </div>
       )
    }
}