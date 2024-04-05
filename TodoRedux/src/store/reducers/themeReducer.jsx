import { TOGGLE_THEME } from "../actionTypes";
const initialState = {
    theme: "light",
}

export const themeReducer=(state=initialState, action)=>{
    switch(action.type){
        case TOGGLE_THEME:
            return{
                ...state,
                theme: !state.theme
            };
            default:
                return state;

    }}