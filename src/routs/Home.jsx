import React from 'react'
import '../components/Heder.css'
import Imgapi from './../Imgapi';
function Home() {
  return (
   <div>
     {
        Imgapi.map((items)=>{
      return(
        <img src={items.img} alt="" />
      )
    })
     }
   
   </div>
  )
}

export default Home