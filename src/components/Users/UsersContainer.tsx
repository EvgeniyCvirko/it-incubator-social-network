import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {CurrentPageAC, FollowAC, setUsersAC, TotalUsersCountAC, UnFollowAC, UsersType} from "../../redux/UsersReducer";
import {Users} from "./Users";
import React from "react";
import axios from "axios";

type MapSateToPropsType = {
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
type UsersPropsType = {
    items:  UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    changeFollowed : (id: string) => void
    changeUnFollowed : (id: string) => void
    setCurrentPage : (currentPage: number) => void
    setTotalUsersCount : (totalUsersCount: number) => void
    setUsers: (users: UsersType[] ) => void
}
class UsersContainer extends React.Component<UsersPropsType, UsersType[]>{
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(55)//Позже отредактирую
        })
    }
    onPageChanged = (currentPage:number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render(){

        return <Users  totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       items={this.props.items}
                       onPageChanged={this.onPageChanged}
                       changeFollowed={this.props.changeFollowed}
                       changeUnFollowed={this.props.changeUnFollowed}


        />
    }
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

export default connect(mapSateToProps, mapDispatchToProps)(UsersContainer)