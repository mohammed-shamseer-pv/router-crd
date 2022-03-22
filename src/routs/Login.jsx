import React from 'react'
import useAuth from '../Hooks/useAuth'
import {useNavigate} from 'react-router-dom'
function Login() {
    const navigate=useNavigate()
 const {login}=useAuth()
 const handilLogin=()=>{
     login()
     .then(navigate('/profil'))
 }

  return (
    <div>
        <h1>This is a login page</h1>
        <button className='bg-teal-500 text-white rounded px-3 py-2' onClick={handilLogin}>Login</button>
    </div>
  )
}

export default Login