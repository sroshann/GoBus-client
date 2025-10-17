import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/login/Login'
import AddBus from './Pages/Addbus/Addbus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>

        <Route element={ <Home /> } path='/' />
        <Route element={ <Signup /> } path='/signup' />
        <Route element={ <Login /> } path='/login' />
        <Route element={ <AddBus /> } path='Addbus' />


      </Routes>
      
    </>
  )
}

export default App
