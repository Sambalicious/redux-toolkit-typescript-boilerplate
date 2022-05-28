import { configureStore } from '@reduxjs/toolkit';


import usersReducer from './features/users'
import cakeReducer from './features/cake'


const store = configureStore({
    reducer: {
        users: usersReducer,
        cakes: cakeReducer
    }
})


export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch