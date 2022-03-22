import React from 'react'
import './Heder.css'
import {NavLink,Link} from 'react-router-dom'
function Header() {
    return (
        <div className='bg p-6 text-white flex items-center justify-between'>
            <Link  className='text-2xl font-bold' to="/">Site Name</Link>
        
            <nav className='flex gap-6 text-white'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/storey">Storey</NavLink>
            <NavLink to="/profil">Profil</NavLink>
            </nav>
        </div>
    )
}

export default Header
