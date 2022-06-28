import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {ProfilePage} from "./ProfilePage";
import React from "react";
import {ProfilePageType, ProfileType, setUsersProfile} from "../../redux/ProfilePageReducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../API/api";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type ProfileContainerType ={
    profile: ProfileType
    setUsersProfile: (profile: ProfileType) => void
}

type MapSateToPropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<PropsType, ProfilePageType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        profileAPI.getProfile(userId).then(data => {
            this.props.setUsersProfile(data)
        })
    }
    render(){
        return <ProfilePage profile={this.props.profile}
        />
    }
}
const mapSateToProps = (state: AppStateType): MapSateToPropsType  => ({profile: state.profilePage.profile })
const mapDispatchToProps =  { setUsersProfile }

const WithRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapSateToProps, mapDispatchToProps)(WithRouterProfileContainer)
