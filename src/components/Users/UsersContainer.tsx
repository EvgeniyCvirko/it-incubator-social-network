import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    currentPageAC,
    followAC,
    setUsersAC,
    toggleIsFetchingAC,
    totalUsersCountAC,
    unFollowAC,
    UsersType
} from "../../redux/UsersReducer";
import {Users} from "./Users";
import React from "react";
import axios from "axios";
import {Loading} from "../common/Loading";

type MapSateToPropsType = {
    items: UsersType[]
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    currentPage: number
}
type MapDispatchToPropsType ={
    changeFollowed: (id: string) => void
    changeUnFollowed: (id: string) => void
    setCurrentPage : (currentPage: number) => void
    setTotalUsersCount : (currentPage: number) => void
    setUsers : (users: UsersType[]) => void
    setIsFetching : (isFetching: boolean) => void
}
type UsersPropsType = {
    items:  UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    changeFollowed : (id: string) => void
    changeUnFollowed : (id: string) => void
    setCurrentPage : (currentPage: number) => void
    setTotalUsersCount : (totalUsersCount: number) => void
    setUsers: (users: UsersType[] ) => void
    setIsFetching : (isFetching: boolean) => void
}
class UsersContainer extends React.Component<UsersPropsType, UsersType[]>{
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false)
            this.props.setTotalUsersCount(55)//Позже отредактирую
        })
    }
    onPageChanged = (currentPage:number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setIsFetching(false)
        })
    }
    render(){

        return <>
            { this.props.isFetching && <Loading />}
            <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         items={this.props.items}
                         onPageChanged={this.onPageChanged}
                         changeFollowed={this.props.changeFollowed}
                         changeUnFollowed={this.props.changeUnFollowed}


        />
        </>
    }
}

let mapSateToProps = (state: AppStateType):MapSateToPropsType  => {
   return {
       items: state.usersPage.users,
       pageSize: state.usersPage.pageSize,
       totalUsersCount: state.usersPage.totalUsersCount,
       currentPage: state.usersPage.currentPage,
       isFetching: state.usersPage.isFetching,
   }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType=> {
   return {
       changeFollowed: (IdUser: string)=>{
           dispatch(followAC(IdUser))
       },
       changeUnFollowed: (IdUser: string)=>{
           dispatch(unFollowAC(IdUser))
       },
       setUsers : (users: UsersType[]) => {
           dispatch(setUsersAC(users))
       },
       setCurrentPage : (currentPage: number) => {
           dispatch(currentPageAC(currentPage))
       },
       setTotalUsersCount : (totalUsersCount: number) => {
           dispatch(totalUsersCountAC(totalUsersCount))
       },
       setIsFetching : (isFetching: boolean) => {
           dispatch(toggleIsFetchingAC(isFetching))
       },
   }
}

export default connect(mapSateToProps, mapDispatchToProps)(UsersContainer)