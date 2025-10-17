import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/login/Login'
import AddBus from './Pages/Addbus/Addbus'
import Contact from './Components/Contact/Contact'
import Profile from './Components/Profile/Profile'

function App() {
  // ✅ Central auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Routes>
      
        <Route 
          path='/' 
          element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route 
          path='/signup' 
          element={<Signup />} 
        />
        <Route 
          path='/login' 
          element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route 
          path='/addbus' 
          element={<AddBus />} 
        />
        <Route 
          path='/Contact'
          element={<Contact isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route 
          path='/Profile' 
          element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} 
        />
      
    </Routes>
  )
}

export default App
