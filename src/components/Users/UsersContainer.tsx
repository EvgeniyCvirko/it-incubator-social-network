import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {
    setCurrentPage,
    changeFollowed,
    changeUnFollowed,
    UsersType, setFollowingInProgress, getUsers,
} from "../../redux/UsersReducer";
import {Users} from "./Users";
import React from "react";
import {Loading} from "../common/Loading";

type MapSateToPropsType = {
    items: UsersType[]
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<string>
    currentPage: number
}

type UsersPropsType = {
    items: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
    changeFollowed: (id: string) => void
    changeUnFollowed: (id: string) => void
    setCurrentPage: (currentPage: number) => void
    setFollowingInProgress: ( userId:string, isFollowing: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType, UsersType[]> {

    componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize)//thunk
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.getUsers(currentPage, this.props.pageSize)//thunk
    }

    render() {

        return <>
            {this.props.isFetching && <Loading/>}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   items={this.props.items}
                   onPageChanged={this.onPageChanged}
                   changeFollowed={this.props.changeFollowed}
                   changeUnFollowed={this.props.changeUnFollowed}
                   followingInProgress={this.props.followingInProgress}
                   setFollowingInProgress={this.props.setFollowingInProgress}
            />
        </>
    }
}

let mapSateToProps = (state: AppStateType): MapSateToPropsType => {
    return {
        items: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
const mapDispatchToProps = {
    changeFollowed,
    changeUnFollowed,
    setCurrentPage,
    setFollowingInProgress,
    getUsers,
}
export default connect(mapSateToProps, mapDispatchToProps)(UsersContainer)