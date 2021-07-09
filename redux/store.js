import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './counter'
import userSlice from './userSlice'
export default configureStore({
    reducer:{
        // counter:CounterSlice,
        users:userSlice,
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    }
})