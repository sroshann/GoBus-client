import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../lib/axios"


export const useSignup = () => {
    
    const navigate = useNavigate()
    return async ( data ) => {

        try {

            const response = await axiosInstance.post('/auth/signup', data)
            // console.log( response?.data )
            navigate('/')
            alert('User signed in successfully')

        } catch (error) { console.log(error) }

    }

}
