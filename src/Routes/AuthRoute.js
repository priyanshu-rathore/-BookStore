import { Navigate} from "react-router";
import React from 'react'

const AuthRoute = ({children}) => {
    if(localStorage.getItem('accessToken')){
        return <Navigate to='/dashboard' />
    }
        return children
    
}

export default AuthRoute