import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../lib/axios"
import { useDispatch, useSelector } from "react-redux"
import { setIsAdmin, setIsAuthenticated, setUserData } from "../Store/Reducers/auth.reducer"

export const useSignup = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return async ( data ) => {

        try {

            const response = await axiosInstance.post('/auth/signup', data)
            dispatch( setUserData( response?.data ) )
            dispatch( setIsAuthenticated() )
            navigate('/')
            alert('User signed in successfully')

        } catch (error) { console.log(error) }

    }

}

export const useLogin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    return async ( data ) => {

        try {

            const response = await axiosInstance.post('/auth/login', data)
            dispatch( setUserData( response?.data ) )
            dispatch( setIsAuthenticated() )

            const { role } = response?.data
            if ( role === "admin" ) dispatch( setIsAdmin() )

            navigate('/')
            alert('Loged in successfully')

        } catch ( error ) { console.log( error )  }

    }

}

export const useLogout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userData } = useSelector( state => state.authentication )
    return async () => {

        try {

            const response = await axiosInstance.get('/auth/logout')
            dispatch( setUserData( null ) )
            dispatch( setIsAuthenticated() )
            
            if ( userData?.role === "admin" ) dispatch( setIsAdmin() )

            navigate('/')
            alert('Loged out in successfully')

        } catch( error ) { console.log( error ) }

    }

}