import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const ablumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://my-json-server.typicode.com/LahiruSen/demo-json-server/'
    }),
    endpoints(builder){
        return{
            addAlbum: builder.mutation({
                invalidatesTags: ['Album'],
                query: (user) => {
                    return{
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            fetchAlbums: builder.query({
                providesTags: ['Album'],
                query: (user) => {
                        return {
                            url: '/albums',
                            params: {
                                userId: user.id
                            },
                            method: 'GET'
                        }
                }
            })
        }
    }
})

export const {useFetchAlbumsQuery, useAddAlbumMutation} = ablumsApi;
export {ablumsApi}