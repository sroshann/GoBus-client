import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../lib/axios"

export const useFindRoutes = () => {

    return async ( data ) => {

        try {

            const response = await axiosInstance.post('/bus/searchRoute', data)
        
            if( Array.isArray( response?.data ) ) {

                if( response?.data.length > 0 ) return response?.data
                alert('No buses were found')

            }
            else alert( response?.data )            

        } catch ( error ) { console.log( error ) }

    }

}  

export const useAddBus = () => {

    const navigate = useNavigate()
    return async ( data ) => {

        try {

            const response = await axiosInstance.post('/bus/add', data)
            navigate('/')
            alert( response?.data )

        } catch ( error ) { console.log( error ) }

    }

}

export const useGetAllBuses = () => {

    const navigate = useNavigate()
    return async () => {

        try {

            const response = await axiosInstance.get('/bus/allBuses')
            
            if ( Array.isArray( response?.data ) ) {

                if ( response?.data.length > 0 ) return response?.data
                alert('No buses were found')

            }
            else alert( response?.data )
            navigate('/')

        } catch ( error ) { console.log( error ) }

    }

}