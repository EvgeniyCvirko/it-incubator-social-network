import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux_store";
import {Loading} from "../components/common/Loading";

type MapStateToPropsType = {
    isAuth: boolean
    isAuthLoading: boolean
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        isAuthLoading: state.auth.isLoading
    }
}

export function WithAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth,isAuthLoading, ...restProps} = props
        if(isAuthLoading) return <Loading/>
        if (!isAuth) {
            return <Redirect to='/login'/>
        }
        return <Component {...restProps as T}/>
    }

    return connect(MapStateToProps)(RedirectComponent)
}