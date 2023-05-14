import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {

    if(!localStorage.getItem("accessToken")){
        return <Navigate to='/'/>
    }
        return children
    

  
}

export default ProtectedRoute