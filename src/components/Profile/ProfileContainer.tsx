import {AppStateType} from "../../redux/redux_store";
import {connect} from "react-redux";
import {Profile} from "./Profile";



const MapSateToProps = (state: AppStateType) => ({
    data: state.profilePage
})

export const ProfileContainer = connect(MapSateToProps, {})(Profile)