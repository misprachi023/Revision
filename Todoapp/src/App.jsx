import { useState,useEffect} from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [todos,setTodo]=useState([])
  const [Task,setTask]=useState("")
  const [page,nextPage]=useState(1)
  const [loading,setLoading]=useState(false)
    
    const Loading=()=>{
      return(
        <h1>Loading.....</h1>
      )

    }
    useEffect(()=>{

      async function getData(){
        try{
          setLoading(true)
          const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
          setTodo(res.data)
          setLoading(false)
        }
        catch(error){
          console.log(`error in getting data`,error)

        }
      }
      getData()
    },[page])

     async function toggleStatus(id){
      try{
        const updatedTools=todos.map((todo)=>(
         todo.id==id?{...todo,completed:!todo.completed}:todo
        ))
        setTodo(updatedTools);
        await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          completed:!todos.find((todo)=>todo.id==id).completed,
        })}
        catch(error){
          console.log(error)
        }

     }
        async function postData(){
          try{
            const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
            {
              title:Task,
              completed:false,
            })
            setTodo([...todos,res.data])

          }
          catch{

          }
        }

  const Pagination=()=>{
    return(
      <>
      <button
      onClick={()=>nextPage(page-1)}
      >previous</button>Page :{page}
      <button
      onClick={()=>nextPage(page+1)}
      >Next</button>
      </>
    )
  }
  const delTodo=(id)=>{
    const updatedList=todos.filter((todo)=>todo.id!==id)
    setTodo(updatedList)
  }

  return(
    <>
    <h1>Todo App</h1>
    <input 
    type="text" 
    onChange={(e)=>setTask(e.target.value)}
    />
    <button
    onClick={postData}
    >add Task</button>
    {loading && <Loading/>}
    <div className="list-container">
        {todos.map((e)=>(
          <div>
          <h2><span>Title : </span>{e.title}</h2>
          <span>Status :</span>
          <button
          onClick={()=>toggleStatus(e.id)}
          >{e.completed?"yes":"no"}</button>
          <button
           onClick={()=>delTodo(e.id)}
          >Delete</button>
          </div>

        ))}
      </div>
      <Pagination/>
    </>
  )
  
}
export default App
