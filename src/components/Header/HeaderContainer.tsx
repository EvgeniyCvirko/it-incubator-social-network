import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthentication} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux_store";

type MapStateToPropsType = {
    login: string
    isFetching: boolean
}
type HeaderContainerPropsType = {
    login: string
    isFetching: boolean
    getAuthentication: () => void
}


class HeaderContainer extends React.Component <HeaderContainerPropsType,MapStateToPropsType > {
    componentDidMount() {
        this.props.getAuthentication()
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
   return {
       isFetching: state.auth.isFetching,
       login: state.auth.login
   }}
const mapDispatchToProps =  { getAuthentication }
export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer)
