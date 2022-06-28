import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {
    setCurrentPage,
    changeFollowed,
    setUsers,
    setIsFetching,
    setTotalUsersCount,
    changeUnFollowed,
    UsersType
} from "../../redux/UsersReducer";
import {Users} from "./Users";
import React from "react";
import axios from "axios";
import {Loading} from "../common/Loading";
import {usersAPI} from "../../API/api";

type MapSateToPropsType = {
    items: UsersType[]
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    currentPage: number
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
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
            this.props.setUsers(data.items)
            this.props.setIsFetching(false)
            this.props.setTotalUsersCount(19665)
        })
    }
    onPageChanged = (currentPage:number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setIsFetching(true)
        usersAPI.getUsers(currentPage,this.props.pageSize).then(data =>{
            this.props.setUsers(data.items)
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
const mapDispatchToProps =  { changeFollowed, changeUnFollowed, setUsers, setCurrentPage,setTotalUsersCount, setIsFetching}
export default connect(mapSateToProps, mapDispatchToProps)(UsersContainer)