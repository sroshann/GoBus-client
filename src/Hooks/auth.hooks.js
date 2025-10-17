import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../lib/axios"
import { useDispatch } from "react-redux"
import { setUserData } from "../Store/Reducers/auth.reducer"

export const useSignup = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return async ( data ) => {

        try {

            const response = await axiosInstance.post('/auth/signup', data)
            dispatch( setUserData( response?.data ) )
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
            navigate('/')
            alert('Loged in successfully')

        } catch ( error ) { console.log( error )  }

    }

}

export const useLogout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    return async () => {

        try {

            const response = await axiosInstance.get('/auth/logout')
            dispatch( setUserData( null ) )
            navigate('/')
            alert('Loged out in successfully')

        } catch( error ) { console.log( error ) }

    }

}