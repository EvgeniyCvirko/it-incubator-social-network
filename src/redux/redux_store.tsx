import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {profilePageReducer} from "./ProfilePageReducer";
import {dialogsPageReducer} from "./DialoguesPageReducer";
import {sideBarReducer} from "./SideBarReducer";



let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>// дай мне возвращаемый тип, и возьми его из rootReducer

 let store: Store<AppStateType>  = createStore(rootReducer);

export default store