import axios from 'axios'
import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
function StoreyId() {
    const {id}=useParams()
    const[storey,setStorey]=useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
            setStorey(res.data)
            console.log(res.data)
        })
    })
   
  return (
    <div className='bg-white p-6 border'>
        <h2 className='text-5xl mb-6'>{storey?.title}</h2>
        <p className='stt'>{storey?.body}</p>
    </div>
  )
}

export default StoreyId