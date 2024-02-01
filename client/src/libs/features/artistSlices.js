import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const artistSlices = createApi({
  reducerPath: "artist",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-44-204-53-62.compute-1.amazonaws.com",
  }),
  endpoints: (builder) => ({
    
    getAllArtists: builder.query({
      query: () => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "artist",
            },
            fields: ["@key", "name", "about", "@assetType"]
          },
        },
      }),
      transformResponse:(response)=>{
        return response.result
      },
      providesTags: ['Artist'],
    }),
    getArtists: builder.query({
      query: () => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "artist",
            },
            fields: ["@key", "name", "about", "@assetType"],
            limit:4
          },
        },
        providesTags: ['Artist'],
      }),
      transformResponse:(response)=>{
        return response.result
        },
    }),
    getArtistById: builder.query({
      query:(id)=>( {
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "artist",
              "@key": id,
            },
            fields: ["@key", "name", "about", "@assetType"]
          },
        },
      }),
      transformResponse:(response)=>{
        return (response.result[0])
      },
      invalidatesTags: ['Artist'],
    }),

    deleteArtist: builder.mutation({
      query:(id)=>( {
        url: `/api/invoke/deleteAsset`,
        method: "DELETE",
        body: {
            "key": {
              "@assetType": "artist",
              "@key": id,
            },
        },
      }),
      invalidatesTags: ['Artist'],
    }),
    updateArtist: builder.mutation({
      query:(dataArtist)=>({
        url: `/api/invoke/updateAsset`,
        method: "PUT",
        body: dataArtist,
      }),
      invalidatesTags: ['Artist'],
    }),

    createArtist: builder.mutation({
      query: (newArtist)=>({
        url: `/api/invoke/createAsset`,
        method: "POST",
        body: newArtist,
      }),
      invalidatesTags: ['Artist'],
    }),
  }),
});

export const {
  useGetAllArtistsQuery,
  useGetArtistsQuery,
  useGetArtistByIdQuery,
  useDeleteArtistMutation,
  useUpdateArtistMutation,
  useCreateArtistMutation,
} = artistSlices; 
