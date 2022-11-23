import {getAuthentication} from "./AuthReducer";
import {BaseThunkType} from "./redux_store";
//types
type InitialStateType = typeof initialState
export type ActionAppType = ReturnType<typeof initialisedSuccess>
type ThunkType = BaseThunkType<ActionAppType>

//state
let initialState = {
    initialised: false,
}

//Component
export const AppReducer = (state = initialState, action: ActionAppType):InitialStateType => {
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

