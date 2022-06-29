import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {ProfilePage} from "./ProfilePage";
import React from "react";
import {getProfile, ProfilePageType, ProfileType} from "../../redux/ProfilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type ProfileContainerType ={
    profile: ProfileType
    getProfile: (userId: string) => void
}

type MapSateToPropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<PropsType, ProfilePageType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }
    render(){
        return <ProfilePage profile={this.props.profile}
        />
    }
}
const mapSateToProps = (state: AppStateType): MapSateToPropsType  => ({profile: state.profilePage.profile })
const mapDispatchToProps =  {getProfile}

const WithRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapSateToProps, mapDispatchToProps)(WithRouterProfileContainer)
