import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UsersClass} from "./UsersClassComponent";
import {CurrentPageAC, FollowAC, setUsersAC, TotalUsersCountAC, UnFollowAC, UsersType} from "../../redux/UsersReducer";
import {Users} from "./Users";

export type MapSateToPropsType = {
    items: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType ={
    changeFollowed: (id: string) => void
    changeUnFollowed: (id: string) => void
    setCurrentPage : (currentPage: number) => void
    setTotalUsersCount : (currentPage: number) => void
    setUsers : (users: UsersType[]) => void
}

let mapSateToProps = (state: AppStateType):MapSateToPropsType  => {
   return {
       items: state.usersPage.users,
       pageSize: state.usersPage.pageSize,
       totalUsersCount: state.usersPage.totalUsersCount,
       currentPage: state.usersPage.currentPage,
   }
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
       },
       setCurrentPage : (currentPage: number) => {
           dispatch(CurrentPageAC(currentPage))
       },
       setTotalUsersCount : (totalUsersCount: number) => {
           dispatch(TotalUsersCountAC(totalUsersCount))
       },
   }
}

export const UsersContainer = connect(mapSateToProps, mapDispatchToProps)(UsersClass)