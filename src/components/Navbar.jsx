import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='sticky top-0 z-50 flex items-center justify-between bg-blue-800 p-5 text-white h-16'>
    <div className='text-3xl text-amber-200'>Logo</div>
    <div className=''>
        <ul className='flex gap-6 items-center justify-center'>
            <li><NavLink to ='/' className={(isActive)=> isActive ? 'underline': ''}>Home</NavLink></li>
            <li>About</li>
            <li><NavLink to='/login' className={({isActive,})=> isActive ? 'underline' : ''}>
            Login
            </NavLink>
            </li>
            <li>Register</li>
        </ul>
    </div>
    </div>
        
    </>
  )
}

export default Navbar