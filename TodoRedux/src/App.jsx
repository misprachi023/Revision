import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todos } from './components/todos'
import { Login } from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux Todo</h1>
      <Login/>
      <Todos/>
    </>
  )
}

export default App
