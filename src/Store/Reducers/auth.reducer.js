import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    userData : null,
    isAuthenticated : false,
    isAdmin : false

}

const authSlice = createSlice({

    name : 'Authentication',
    initialState,
    reducers : {

        setUserData : ( state, action ) => { state.userData = action.payload },
        setIsAuthenticated : ( state ) => { state.isAuthenticated = !state.isAuthenticated },
        setIsAdmin : ( state ) => { state.isAdmin = !state.isAdmin }

    }

})

export const { setUserData, setIsAuthenticated, setIsAdmin } = authSlice.actions
export default authSlice.reducer