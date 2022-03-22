import React from 'react'
import{useEffect,useState} from 'react'
import useAuth from '../Hooks/useAuth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function ProfileFile() {
  const[song,setSong]=useState()
  const navicat=useNavigate()
  const {logout}=useAuth()
  const handilLogout=()=>{
    logout()
    .then(navicat('/'))
  }

  useEffect(()=>{
    axios.get("https://zeeapis.herokuapp.com/youtobe").then((res)=>{
      setSong(res.data)
      console.log(res.data)
    })
  },[])
  
  return (
    <div>
       <button onClick={handilLogout} className='bg-red-500 text-white rounded px-3 py-2 mx-0'>Logout</button>
      <h1>Songs</h1>
      {
        song && song.map((item)=>{
          return(
            <div>
                <h1>{item.name}</h1>
            <iframe src={item.yt} frameborder="0"></iframe>
            </div>
          
          )
        })
      }
     

    
    </div>
  )
}

export default ProfileFile