import React from 'react';
import './Profile.css';
import {Header} from './Header/Header';
import {MyPost,} from "./MyPost/MyPost";
import {Data} from "./Data/Data";
import { StoreType,} from "../../redux/store";

 type ProfilePropsType={
     data:StoreType,
 }
export const Profile: React.FC<ProfilePropsType> = ({data }) =>{
    return(
        <div >
            <Header />
            <Data />
            <MyPost data={data}

            />
        </div>
    )
}
