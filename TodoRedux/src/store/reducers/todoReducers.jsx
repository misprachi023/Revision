import { ADD_TODO,UPDATE_TODO,DELETE_TODO } from "../actionTypes";

const initialState = {
    todos: [],
};
export const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_TODOS":
            
            return{
                ...state,
                todos:action.payload
            }
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,action.payload]

            }
        case UPDATE_TODO:
            return{
                ...state,
                todos:state.todos.map(todo=>
                    todo.id===action.payload.id?{...todo,task:action.payload.task}:todo)
            }
        case DELETE_TODO:
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id!==action.payload.id)
            }
        default:
            return state
        
        
    }
}