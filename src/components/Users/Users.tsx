import React from 'react';
import {UsersType} from "../../redux/UsersReducer";
import {v1} from "uuid";
import s from './Users.module.css'

export type UsersPropsType = {
    items:  UsersType[]
    changeFollowed : (id: string) => void
    changeUnFollowed : (id: string) => void
    setUsers: (users: UsersType[] ) => void
}


export const Users = (props:UsersPropsType ) =>{
        if( props.items.length === 0 ){
            props.setUsers(
                [
                    {id: v1(), followed: false, fullName: "Dmitriy", status: "I am boss", location:{ country: "Belarus", city: 'Minsk' } , photoUser: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png', },
                    {id: v1(),  followed: false, fullName: "Elena", status: "I am lady", location:{ country: "Germany", city: 'Hamburg' }, photoUser: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png', },
                    {id: v1(), followed: true, fullName: "Sasha", status: "I am boss too", location:{ country: "Ukraine", city: 'Kiev' },  photoUser: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png', },
                    {id: v1(), followed: true, fullName: "Igor", status: "I am boss too", location:{ country: "Brazilian", city: 'San Paulo' }, photoUser: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png', },
                ]
            )
        }
    return <div>
        {
            props.items.map(u => {
                const changeFollowedHandler = () =>{
                    props.changeFollowed(u.id)
                }
                const changeUnFollowedHandler = () =>{
                    props.changeUnFollowed(u.id)
                }
                return(
                <div key={u.id} className={s.User}>
                    <div className={s.LeftBlock}>
                        <div>
                            <img src={u.photoUser}/>
                        </div>
                        <div>
                            { u.followed
                                ?  <button onClick={changeUnFollowedHandler}>UnFollow</button>
                                :<button onClick={changeFollowedHandler}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.RightBlock}>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                </div>)
            })
        }
    </div>
}