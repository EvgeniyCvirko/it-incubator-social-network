import {Action, applyMiddleware, combineReducers, legacy_createStore as createStore, Store} from "redux";
import {profilePageReducer} from "./ProfilePageReducer";
import {dialogsPageReducer} from "./DialoguesPageReducer";
import {sideBarReducer} from "./SideBarReducer";
import {usersPageReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import  thunkMiddleware, { ThunkAction } from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import {AppReducer} from "./AppReducer";

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: AuthReducer,
    form: formReducer,// обязательное имея свойства store -> form
    app: AppReducer
});
export type BaseThunkType<A extends Action,R = Promise<void>> = ThunkAction< R,AppStateType,unknown,A >
export type AppStateType = ReturnType<typeof rootReducer>// дай мне возвращаемый тип, и возьми его из rootReducer

let store: Store<AppStateType>  = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store

// @ts-ignore
window.store = store