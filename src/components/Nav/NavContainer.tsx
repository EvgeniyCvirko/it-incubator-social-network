import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {Nav} from "./Nav";



let mapStateToProps = (store: AppStateType) => {
    return{
        state: store.sideBar
    }
}
export const NavContainer = connect (mapStateToProps, {}) (Nav);