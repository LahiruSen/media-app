import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload)
        })
        .addCase(addUser.rejected, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        })
        .addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((user) => user.id !== action.payload.id)
        })
        .addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    
    }
}
    )

    export const usersReducer = usersSlice.reducer;