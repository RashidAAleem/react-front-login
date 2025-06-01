import React from 'react'

const Footer = () => {
  return (
    <div className="sticky bottom-0 z-50 bg-blue-800 p-5 text-white shadow-inner h-16">
      <div className="flex items-center justify-evenly">
        <div className="text-sm">© 2025 MyApp. All rights reserved.</div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
