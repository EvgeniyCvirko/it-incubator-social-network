import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthentication, logout} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux_store";
//types
type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type mapDispatchToPropsPropsType = {
    getAuthentication: () => void
    logout: () => void
}
type HeaderContainerPropsType = MapStateToPropsType & mapDispatchToPropsPropsType

//component
class HeaderContainer extends React.Component <HeaderContainerPropsType,MapStateToPropsType > {
    // componentDidMount() {
    //     this.props.getAuthentication()
    // }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
   return {
       isAuth: state.auth.isAuth,
       login: state.auth.login
   }}
const mapDispatchToProps =  { getAuthentication, logout }
export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer)
