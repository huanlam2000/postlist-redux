import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Saitama' },
    { id: '1', name: 'Songoku' },
    { id: '2', name: 'Vegeta' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer;