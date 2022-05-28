import { createSlice } from "@reduxjs/toolkit";


interface IState {
    totalCakes: number
}

const initialState: IState = {
    totalCakes: 20
}

const cakeSlice = createSlice({
    name: 'cakes',
    initialState,
    reducers: {
        ordered: (state) => {
            state.totalCakes -= 1
        },
        restored: (state, action) => {
            state.totalCakes += action.payload
        }
    }
})

export const { ordered, restored } = cakeSlice.actions
export default cakeSlice.reducer