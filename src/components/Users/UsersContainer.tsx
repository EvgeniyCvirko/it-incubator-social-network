import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UsersClass} from "./UsersClassComponent";
import {FollowAC, setUsersAC, UnFollowAC, UsersType} from "../../redux/UsersReducer";

export type MapSateToPropsType = {
    items: UsersType[]
}
type MapDispatchToPropsType ={
    changeFollowed: (id: string) => void
    changeUnFollowed: (id: string) => void
    setUsers : (users: UsersType[]) => void
}

let mapSateToProps = (state: AppStateType):MapSateToPropsType  => {
   return {
       items: state.usersPage.users}
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType=> {
   return {
       changeFollowed: (IdUser: string)=>{
           dispatch(FollowAC(IdUser))
       },
       changeUnFollowed: (IdUser: string)=>{
           dispatch(UnFollowAC(IdUser))
       },
       setUsers : (users: UsersType[]) => {
           dispatch(setUsersAC(users))
       }
   }
}

export const UsersContainer = connect(mapSateToProps, mapDispatchToProps)(UsersClass)