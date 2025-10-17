import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/login/Login'
import AddBus from './Pages/Addbus/Addbus'

import SelectedBus from './Pages/Selectedbus/Selectedbus'
import Allbuses from './pages/Allbuses/Allbuses'

function App() {
  // ✅ Central auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      
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

        <Route element={ <SelectedBus /> } path='/selectedbus' />
        <Route element={ <Allbuses /> } path='/Allbuses' /> 
      
    </Routes>

    </>
  )
}

export default App
