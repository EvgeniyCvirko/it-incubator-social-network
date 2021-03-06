import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {ProfilePage} from "./ProfilePage";
import React from "react";
import {
    getProfile,
    getUserStatus,
    ProfilePageType,
    ProfileType,
    updateUserStatus
} from "../../redux/ProfilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type ProfileContainerType ={
    profile: ProfileType
    getProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    myId:string
    status:string
}

type MapSateToPropsType = {
    profile: ProfileType
    myId:string
    status:string
}

class ProfileContainer extends React.Component<PropsType, ProfilePageType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.myId
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }
    render(){
        return <ProfilePage profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}
        />
    }
}
const mapSateToProps = (state: AppStateType): MapSateToPropsType  => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.userId
})
const mapDispatchToProps =  {getProfile,getUserStatus,updateUserStatus}

export default compose<React.ComponentType>(WithAuthRedirect , connect(mapSateToProps, mapDispatchToProps),withRouter)(ProfileContainer)
