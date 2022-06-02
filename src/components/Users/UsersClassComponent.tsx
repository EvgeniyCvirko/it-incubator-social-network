import React from 'react';
import {UsersType} from "../../redux/UsersReducer";
import photoUser from '../../redux/Icon/User.svg.png'
import s from './Users.module.css'
import  axios from 'axios';

export type UsersPropsType = {
    items:  UsersType[]
    changeFollowed : (id: string) => void
    changeUnFollowed : (id: string) => void
    setUsers: (users: UsersType[] ) => void
}


export class UsersClass extends React.Component<UsersPropsType, UsersType[]>{
/* constructor(props:UsersPropsType ) {
     super(props);


 }*/
 componentDidMount() {
     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
         this.props.setUsers(response.data.items)
     })
 }


    render(){
        return(
        <div>
            {
                this.props.items.map(u => {
                    const changeFollowedHandler = () =>{
                        this.props.changeFollowed(u.id)
                    }
                    const changeUnFollowedHandler = () =>{
                        this.props.changeUnFollowed(u.id)
                    }
                    return(
                        <div key={u.id} className={s.User}>
                            <div className={s.LeftBlock}>
                                <div>
                                    <img src={ u.photos.small !== null ? u.photos.small : photoUser}/>
                                </div>
                                <div>
                                    { u.followed
                                        ?  <button onClick={changeUnFollowedHandler}>UnFollow</button>
                                        :<button onClick={changeFollowedHandler}>Follow</button>}
                                </div>
                            </div>
                            <div className={s.RightBlock}>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{'u.location.city'}</div>
                                    <div>{'u.location.country'}</div>
                                </div>
                            </div>
                        </div>)
                })
            }
        </div>)
    }
}