import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthentication} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux_store";

type MapStateToPropsType = {
    login: string
    isAuth: boolean
}
type HeaderContainerPropsType = {
    login: string
    isAuth: boolean
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
       isAuth: state.auth.isAuth,
       login: state.auth.login
   }}
const mapDispatchToProps =  { getAuthentication }
export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer)
