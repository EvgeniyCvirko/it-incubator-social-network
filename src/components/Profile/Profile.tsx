import React from 'react';
import './Profile.css';
import {Header} from './Header/Header';
import {Data} from "./Data/Data";
import {MyPostContainer} from "./MyPost/MyPostContainer";
import {AppStateType} from "../../redux/redux_store";

 type ProfilePropsType={
     data:AppStateType,
 }
export const Profile: React.FC<ProfilePropsType> = ({data }) =>{
    return(
        <div >
            <Header />
            <Data />
            <MyPostContainer data={data}

            />
        </div>
    )
}
