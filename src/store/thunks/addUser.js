import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk('users/add', async() => {
    const response = await axios.post('https://my-json-server.typicode.com/LahiruSen/demo-json-server/users', {
        name: faker.person.fullName(),
        id: nanoid()

    });
    return response.data;
})

export {addUser}