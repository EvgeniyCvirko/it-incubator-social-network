import {AppStateType} from '../../redux/redux_store';
import {connect} from 'react-redux';
import {ProfilePage} from './ProfilePage';
import React from 'react';
import {
  getProfile,
  getUserStatus,
  ProfileType, savePhoto, updateProfile,
  updateUserStatus
} from '../../redux/ProfilePageReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
  userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & DispatchPropsType & MapSateToPropsType

type DispatchPropsType = {
  getProfile: (userId: number) => void
  getUserStatus: (userId: number) => void
  updateUserStatus: (status: string) => void
  savePhoto: (file: File) => void
  updateProfile: (profile: ProfileType) => Promise<any>
}
type MapSateToPropsType = {
  profile: ProfileType | null
  status: string
  myId: number | null
}

class ProfileContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  componentRefresh() {
    let userId: number | null = +this.props.match.params.userId
    if (!userId) {
      userId = this.props.myId
    }
    if (!userId) {
      console.error("ID should exists in URI params or in state ('authorizedUserId')");
    } else {
      this.props.getProfile(userId)
      this.props.getUserStatus(userId)
    }
  }

  componentDidMount() {
    this.componentRefresh()
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.componentRefresh()
    }
  }
  componentWillUnmount(): void {
  }


  render()
{
  return <ProfilePage {...this.props}
                      profile={this.props.profile}
                      status={this.props.status}
                      updateStatus={this.props.updateUserStatus}
                      isOwn={!this.props.match.params.userId}
                      savePhoto={this.props.savePhoto}
                      updateProfile={this.props.updateProfile}
  />
}
}

const mapSateToProps = (state: AppStateType): MapSateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myId: state.auth.userId
})
const mapDispatchToProps = {getProfile, getUserStatus, updateUserStatus, savePhoto, updateProfile}

export default compose<React.ComponentType>(WithAuthRedirect, connect(mapSateToProps, mapDispatchToProps), withRouter)(ProfileContainer)
