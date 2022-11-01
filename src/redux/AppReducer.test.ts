import {AppReducer, initialisedSuccess} from "./AppReducer";

let startState = {
    initialised: false,
}
test('App should be initialised', () => {
    const action = initialisedSuccess()
    const endState = AppReducer(startState,action)
    expect(endState.initialised).toBe(true)
});

