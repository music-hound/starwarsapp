import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({

    getPeople: builder.query({
      query: (page, isWookie) => `people/?page=${page}${ isWookie ? '/?format=wookiee' : '' }`,
    }),

    getPersonById: builder.query({
      query: (id) => `people/${id}/`,
    }),

  }),
})

export const { useGetPeopleQuery, useGetPersonByIdQuery } = swApi;
