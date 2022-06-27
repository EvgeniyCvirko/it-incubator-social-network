import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/AuthReducer";
import {AppStateType} from "../../redux/redux_store";

type MapStateToPropsType = {
    login: string
    isFetching: boolean
}
type HeaderContainerPropsType = {
    login: string
    isFetching: boolean
    setUserData: (userId: number, email: string, login: string) => void
}


class HeaderContainer extends React.Component <HeaderContainerPropsType,MapStateToPropsType > {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials : true
        }).then(response => {
            if(response.data.resultCode === 0){
                let {id, login, email } = response.data.data
                this.props.setUserData(id,email,login)
            }
        })
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
const mapDispatchToProps =  { setUserData }
export default connect (mapStateToProps,mapDispatchToProps)(HeaderContainer)
