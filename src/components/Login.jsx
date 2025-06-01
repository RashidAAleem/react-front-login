import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
// const [first, setfirst] = useState(second)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


const handleSubmit = (e)=>{
  e.preventDefault();
  console.log("Email", email);
  console.log("Password", password);
  if (email === "abc@gmail.com" && password === 'black_spider87us') {
    localStorage.setItem("isAdmin", 'true');
    navigate('/admin')    
  }  else {
    alert ('Invalid Credentials')
  }
}


  return (
    <div
      className="flex items-center justify-center bg-gray-400 px-4"
      style={{ height: 'calc(100vh - 4rem - 4rem)' }} // Adjust if Navbar/Footer height differ
    >
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Login</h2>
        <form className="space-y-4" onSubmit ={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              onChange = {(e)=> setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              onChange = {(e)=>setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
