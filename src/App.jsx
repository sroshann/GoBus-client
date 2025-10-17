import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/login/Login'
import AddBus from './Pages/Addbus/Addbus'
import SelectedBus from './Pages/Selectedbus/Selectedbus'
import Allbuses from './pages/Allbuses/Allbuses'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>

        <Route element={ <Home /> } path='/' />
        <Route element={ <Signup /> } path='/signup' />
        <Route element={ <Login /> } path='/login' />
        <Route element={ <AddBus /> } path='/Addbus' />
        <Route element={ <SelectedBus /> } path='/selectedbus' />
        <Route element={ <Allbuses /> } path='/Allbuses' /> 

      </Routes>
      
    </>
  )
}

export default App
