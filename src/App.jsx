import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/login/Login'
import AddBus from './Pages/Addbus/Addbus'
import Allbuses from './pages/Allbuses/Allbuses'
import { ProtectAdmin, ProtectAuth, ProtectFeatures } from './Middlewares/ProtectRoutes'

function App() {

    return (
        <>

            <Routes>

                <Route path='/' element={ <ProtectFeatures> <Home /> </ProtectFeatures> } />
                <Route path='/signup' element={ <ProtectAuth> <Signup /> </ProtectAuth>} />
                <Route path='/login' element={ <ProtectAuth> <Login/> </ProtectAuth> } />
                <Route path='/addbus' element={ <ProtectAdmin> <AddBus /> </ProtectAdmin> } />
                <Route element={ <ProtectAdmin> <Allbuses /> </ProtectAdmin> } path='/Allbuses' />

            </Routes>

        </>
    )
}

export default App
