import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const getUser = createAsyncThunk(
     "users/gerUsers",
     async(dispatch,getState)=>{
         return await fetch('https://jsonplaceholder.typicode.com/users')
         .then((response)=>response.json())
     }
 )
const userSlice = createSlice({
    name:'user',
    initialState:{
        user:[],
        status:null
    },
    extraReducers: {
        [getUser.pending]:(state) =>{
            state.status ='loading'
        },
        [getUser.fulfilled] :(state,action) =>{
            state.status ='success'
            state.user = action.payload
        },
        [getUser.rejected] :(state) =>{
            state.status = 'rejected'
        }
    }

})
export default userSlice.reducer