
import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
function StoorreyList() {
  const navigate=useNavigate()
 const[sy,setSy]=useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setSy(res.data )
      console.log(res.data)
    })

  },[])
  return (
    <div  className='grid grid-cols-2 gap-6'>
     
      {
        sy && sy.map((itm)=>{
          return(
            <div className='bg-white border p-6'>
              <h2 className='text-3xl mb-5'>{itm.title}</h2>
              <button onClick={()=>navigate(`${itm.id}`)} className='bg-pink-500 text-white px-3 py-1'>Reade Story</button>
            </div>
          )
        })
      }



    </div>
  )
}

export default StoorreyList