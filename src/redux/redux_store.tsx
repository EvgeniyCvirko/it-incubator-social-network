import {combineReducers, legacy_createStore as createStore} from "redux";
import {profilePageReducer} from "./ProfilePageReducer";
import {dialogsPageReducer} from "./DialoguesPageReducer";
import {StoreType} from "./store";
import {sideBarReducer} from "./SideBarReducer";



let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer
});



export let store : StoreType = createStore(rootReducer);
