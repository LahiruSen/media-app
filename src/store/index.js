import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ablumsApi } from "./apis/albumsApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [ablumsApi.reducerPath]: ablumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ablumsApi.middleware)
    
    }
})

setupListeners(store.dispatch)

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser'
export {useFetchAlbumsQuery, useAddAlbumMutation} from './apis/albumsApi'