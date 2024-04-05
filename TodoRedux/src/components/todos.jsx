import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'

/**
* @author
* @function Login
**/

export const Todos = (props) => {

    const [newTodo, setNewTodo] = useState('')
    const Auth=(useSelector(state => state.auth.Auth))

    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        getTodos()
        
    },[])

    const getTodos = async () => {
        try{
            const res=await fetch('https://jsonplaceholder.typicode.com/todos')
            const data= await res.json()
            dispatch({type:'GET_TODOS',payload:data})
            return data
        }
        catch(err){
            console.log(err)
        }
    }
    console.log(todos)
    
  return(
    <div>
        <h1>Todos</h1>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={() => dispatch({type:'ADD_TODO',payload:newTodo})}>Add Todo</button>
        <p>There are {todos.length} todos</p>

        {
            Auth?(
            todos.map(todo=>(
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',boxShadow:'0 0 5px #ccc',padding:'10px',margin:'10px'}} key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button onClick={()=>dispatch({type:'DELETE_TODO',payload:todo.id})}>Delete</button>
                </div>

            ))):"Not Logged In"
        }
    </div>
   )
  }
