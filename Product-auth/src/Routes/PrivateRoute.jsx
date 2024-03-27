import { useContext } from "react"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"


export const PrivateRoute = ({ element, ...rest })=>{
    const {isAuth} = useContext(AuthContext)
    return (isAuth? (
        <Routes>
        <Route {...rest} element={element} /></Routes>
      ) : (
        <Navigate to="/login" replace />))
}