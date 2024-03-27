import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import SingleProduct from '../Pages/SingleProduct'
import Login from '../Pages/Login'
import AllProducts from '../Pages/Products'
import { PrivateRoute } from './PrivateRoute'
import { Cart } from '../Pages/Cart'

const AllRoutes = () => {
    return (
        <div>
             <Routes>
              
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route element={<PrivateRoute/>}/>
              
              <Route path="/products/:product_id" element={<SingleProduct/>}/>
              <Route path="/cart" element={<Cart/>}/>
              
            </Routes><PrivateRoute path="/products" element={<AllProducts/>}/>
            
        </div>
    )
}

export {AllRoutes}