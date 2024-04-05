import { LOGIN_SUCCESS, LOGOUT } from "../actionTypes";

const initialState = {
    user: null,
    Auth:false
}

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                user:action.payload,
                Auth:true
            }
        case LOGOUT:
            return{
                ...state,
                user:null,
                Auth:false
            }
        default:
            return state
    }
}