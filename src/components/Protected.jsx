import React from 'react'
import useAuth from '../Hooks/useAuth'
import {Navigate} from 'react-router-dom'
function Protected({children}) {
  const {authed}=useAuth()
  return (
    <div>
        {authed ? children: <Navigate to='/login'></Navigate>}
    </div>
  )
}

export default Protected