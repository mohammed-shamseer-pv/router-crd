import React from 'react'
import '../components/Heder.css'
import vd from '../video/vd2.mp4'
function About() {
  return (
    
    <div>
        <h1>Hello Aboute page</h1>
        <video  autoPlay loop src={vd}></video>
    </div>
  )
}

export default About