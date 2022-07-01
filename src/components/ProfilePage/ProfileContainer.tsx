import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {ProfilePage} from "./ProfilePage";
import React from "react";
import {getProfile, ProfilePageType, ProfileType} from "../../redux/ProfilePageReducer";
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
    myId:string
}

type MapSateToPropsType = {
    profile: ProfileType
    myId:string
}

class ProfileContainer extends React.Component<PropsType, ProfilePageType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        !userId ? this.props.getProfile(this.props.myId) : this.props.getProfile(userId)
    }
    render(){
        return <ProfilePage profile={this.props.profile}
        />
    }
}
const mapSateToProps = (state: AppStateType): MapSateToPropsType  => ({
    profile: state.profilePage.profile,
    myId: state.auth.userId
})
const mapDispatchToProps =  {getProfile}

export default compose<React.ComponentType>(WithAuthRedirect , connect(mapSateToProps, mapDispatchToProps),withRouter)(ProfileContainer)
