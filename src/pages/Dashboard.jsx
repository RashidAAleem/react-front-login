import React from 'react'
import Navbar from '../components/Navbar2'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow relative">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Dashboard