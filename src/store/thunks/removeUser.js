import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const removeUser = createAsyncThunk('users/delete', async(user) => {
    await axios.delete(`https://my-json-server.typicode.com/LahiruSen/demo-json-server/users/${user.id}`);
    return user;
})

export {removeUser}