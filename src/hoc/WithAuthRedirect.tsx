import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux_store";

type MapStateToPropsType = {
    isFetching: boolean
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isFetching: state.auth.isFetching
    }
}

export function WithAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isFetching, ...restProps} = props
        if (!isFetching) {
            return <Redirect to='/login'/>
        }
        return <Component {...restProps as T}/>
    }

    let ConnectRedirectComponent = connect(MapStateToProps)(RedirectComponent)

    return ConnectRedirectComponent
}