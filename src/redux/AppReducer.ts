import {getAuthentication} from "./AuthReducer";
import {BaseThunkType} from "./redux_store";
//types
export type AppType = {
    initialised: boolean
}
export type ActionAppType = ReturnType<typeof initialisedSuccess>
let initialState = {
    initialised: false,
}
type ThunkType = BaseThunkType<ActionAppType>
//Component
export const AppReducer = (state: AppType = initialState, action: ActionAppType) => {
    switch (action.type) {
        case "INITIALISED-STATE":
            return {
                ...state,
                initialised: true,
            };
    }
    return state;
}

export const initialisedSuccess = () => ({type: "INITIALISED-STATE" } as const);

export const initialiseApp = ():ThunkType => async (dispatch)=>{
    let promise = dispatch(getAuthentication())
    Promise.all([promise])
            .then(() =>{
            dispatch(initialisedSuccess())
        })
}

