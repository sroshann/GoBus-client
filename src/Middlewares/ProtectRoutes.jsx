import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

// Protecting authentication routes if already authenticated
export const ProtectAuth = ({ children }) => {

    const { isAuthenticated } = useSelector( state => state.authentication )
    if( isAuthenticated ) return <Navigate to={ '/' } replace />
    return children

}

// Protecting functional routes accessing before authentication
export const ProtectFeatures = ({ children }) => {

    const { isAuthenticated } = useSelector( state => state.authentication )
    const location = useLocation()
    if( !isAuthenticated ) return <Navigate to={'/login'} state={{ from : location }} replace />
    return children

}

// Protecting functional routes accessing before authentication
export const ProtectAdmin = ({ children }) => {

    const { isAdmin } = useSelector( state => state.authentication )
    const location = useLocation()
    if( !isAdmin ) return <Navigate to={'/login'} state={{ from : location }} replace />
    return children

}