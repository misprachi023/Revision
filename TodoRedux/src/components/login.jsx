import React from 'react'
import { useDispatch } from 'react-redux'

/**
* @author
* @function Login
**/


export const Login = () => {
    const dispatch=useDispatch()
    const [user,setUser]=React.useState({
        email:'',
        password:''
    })
    const handleChange = (e) => {
        const {name,value}=e.target
        console.log(email.value,password.value)
        setUser({
            ...user,[name]:value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res=await fetch('https://reqres.in/api/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            const data=await res.json()
            if(data.token=="QpwL5tke4Pnpja7X4"){
                console.log("true")
                dispatch({
                    type:'LOGIN_SUCCESS',payload:data})
            }
        } catch (error) {
            
        }
    }
  return(
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h1>Login Form</h1>
        <form style={{gap:'10px', display:'flex',flexDirection:'column', width:'300px',margin:'auto'}} onSubmit={handleSubmit}>
            <label  htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" id="email" name="email" placeholder="Enter email" />
            <label htmlFor="password">Password</label>
            <input style={{marginBottom:'10px'}} onChange={handleChange} type="password" id="password" name="password" placeholder="Enter password" />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
