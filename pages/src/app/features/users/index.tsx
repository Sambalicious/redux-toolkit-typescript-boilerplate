


import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUsers } from '../../../types';

interface IState {
    loading: boolean
    error: string
    users: IUsers[]
}
const initialState: IState = {
    loading: false,
    error: '',
    users: []
}


const getUsers = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', getUsers)

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUsers[]>) => {
            state.loading = false
            state.users = action.payload
        }
        );
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'something went wrong'
        });
    }
})


export default userSlice.reducer