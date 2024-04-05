import {createStore,combineReducers} from "redux"
import {themeReducer} from "./reducers/themeReducer"
import {todoReducer} from "./reducers/todoReducers"
import {authReducer} from "./reducers/authReducer"


export const store=createStore(combineReducers(
    {
        theme:themeReducer,
        todo:todoReducer,
        auth:authReducer
    }
))