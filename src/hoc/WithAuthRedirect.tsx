import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux_store";

type MapStateToPropsType = {
    isAuth: boolean
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to='/login'/>
        }
        return <Component {...restProps as T}/>
    }

    let ConnectRedirectComponent = connect(MapStateToProps)(RedirectComponent)

    return ConnectRedirectComponent
}