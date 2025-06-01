import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin'); // Remove admin flag
    navigate('/login'); // Redirect to login
  };

  return (
    <div className='sticky top-0 z-50 flex items-center justify-between bg-blue-800 p-5 text-white h-16'>
      <div className='text-3xl text-amber-200'>Logo</div>
      <ul className='flex gap-6 items-center justify-center'>
        <li>
          <NavLink 
            to='/' 
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <button 
            onClick={handleLogout}
            className='hover:underline focus:outline-none'
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
