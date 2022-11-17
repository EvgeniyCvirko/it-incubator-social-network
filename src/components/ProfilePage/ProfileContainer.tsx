import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {ProfilePage} from "./ProfilePage";
import React from "react";
import {
    getProfile,
    getUserStatus,
    ProfilePageType,
    ProfileType, savePhoto, updateProfile,
    updateUserStatus
} from '../../redux/ProfilePageReducer';
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
    savePhoto: (file: File) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    updateProfile: (newProfile:ProfileType) => void
    myId:string
    status:string
}

type MapSateToPropsType = {
    profile: ProfileType
    myId:string
    status:string
}

class ProfileContainer extends React.Component<PropsType, ProfilePageType>{
    componentRefresh() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.myId
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.componentRefresh()
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<ProfilePageType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.componentRefresh()
        }
    }

    render(){
        return <ProfilePage profile={this.props.profile}
                            status={this.props.status}
                            updateStatus={this.props.updateUserStatus}
                            isOwn={this.props.myId}
                            savePhoto={this.props.savePhoto}
                            updateProfile={this.props.updateProfile}
        />
    }
}
const mapSateToProps = (state: AppStateType): MapSateToPropsType  => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.userId
}) as MapSateToPropsType
const mapDispatchToProps =  {getProfile,getUserStatus,updateUserStatus,savePhoto,updateProfile}

export default compose<React.ComponentType>(WithAuthRedirect , connect(mapSateToProps, mapDispatchToProps),withRouter)(ProfileContainer)
