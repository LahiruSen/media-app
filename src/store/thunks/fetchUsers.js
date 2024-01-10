import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch' , async() => {
    const response = await axios.get('https://my-json-server.typicode.com/LahiruSen/demo-json-server/users');
    await pause(2000);
    return response.data;
})

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { fetchUsers };