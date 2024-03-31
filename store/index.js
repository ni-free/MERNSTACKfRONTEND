import { configureStore, createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {user:"", isloggedin:false},
  reducers: {
    login(state){
        state.isloggedin=true
    },
    logout(state){
        state.isloggedin=false
    }
  },
    
})

// Action creators are generated for each case reducer function
export const authentication = authSlice.actions

export const store =configureStore({
    reducer:authSlice.reducer
})