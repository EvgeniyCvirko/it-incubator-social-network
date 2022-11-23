import './MyPostContainer.css';
import {AppStateType} from "../../../redux/redux_store";
import {connect} from "react-redux";
import {MyPost} from "./MyPost";
import {PostsType} from '../../../types/types';

export type MapStateToPropsType = {
    items: Array<PostsType>
}
let mapStateToProps = (store: AppStateType): MapStateToPropsType => {
    return{
        items: store.profilePage.posts
    }
}
export const MyPostContainer = connect (mapStateToProps, {}) (MyPost);