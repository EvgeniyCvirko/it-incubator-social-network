import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {
    setCurrentPage,
    UsersType, setFollowingInProgress, getUsers, followUser, unFollowUser,
} from "../../redux/UsersReducer";
import {Users} from "./Users";
import React from "react";
import {Loading} from "../common/Loading";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

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
    setCurrentPage: (currentPage: number) => void
    setFollowingInProgress: ( userId:string, isFollowing: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: string) => void
    unFollowUser: (userId: string) => void
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
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}
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
    setCurrentPage,
    setFollowingInProgress,
    getUsers,
    followUser,
    unFollowUser,
}
export default compose<React.ComponentType> (connect(mapSateToProps, mapDispatchToProps),WithAuthRedirect )(UsersContainer)


