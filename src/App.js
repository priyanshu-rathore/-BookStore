import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './Pages/CartPage/CartPage'
import DashBoard from './Pages/DashBoard/DashBoard'
import LandingPage from './Pages/LandingPage/LandingPage'
import OrderPlaced from './Pages/OrderPlaced/OrderPlaced'
import AuthRoute from './Routes/AuthRoute'
// import CartRoute from './Routes/CartRoute'
import ProtectedRoute from './Routes/ProtectedRoute'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<AuthRoute><LandingPage/></AuthRoute>}/>
    <Route path='dashboard' element={<ProtectedRoute><DashBoard/></ProtectedRoute>}/>
    <Route path='/cart' element={<CartPage/>} />
    <Route path='/cart/order-placed-successfully' element={<OrderPlaced/>} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App