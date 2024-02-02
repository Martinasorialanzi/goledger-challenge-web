//RTK query sirve para manejar estados haciendo llamass apis evinyando usar thunks etc, lo que reduce la cantidad de codigos

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const songSlices = createApi({
  reducerPath: "songs",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-44-204-53-62.compute-1.amazonaws.com",
  }),
  endpoints: (builder) => ({
    //funcion que devuelve un objeto //el builder permite definir cuales son las peticiones que traen datos(query)=>(get) y las que mutas datos (mutaciones)=>(put/delete/post)
    getAllSongs: builder.query({
      query: () => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "song",
            },
            fields:["title","@key","album.@key","artists.0.@key", "explicit"]
          },
        },
      }),
      providesTags: ['Songs'],
      transformResponse:(response)=>{
        return response.result
        
        },
    }),



    getSongs: builder.query({
      query: () => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "song",
            },
            fields:["title","@key","album.@key","artists", "explicit"],
            limit:6
          },
        },
      }),
      providesTags: ['Songs'],
      transformResponse:(response)=>{
        return response.result
        
        },
    }),

    getSongById: builder.query({
      
      query:(id) =>({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "song",
              "@key": id,
            },
            fields:["title","@key","album.@key","artists.0.@key", "explicit"]
          
          },
        },
      }),
      invalidatesTags: ['Songs'],
      transformResponse:(response)=>{
        return response.result[0]
        
        },
    }),
    deleteSong: builder.mutation({
      query:(id)=>( {
        url: `/api/invoke/deleteAsset`,
        method: "DELETE",
        body: {
          "key": {
              "@assetType": "song",
              "@key": id,
          },
        },
      }),
    
      invalidatesTags: ['Songs'],
    }),
    updateSong: builder.mutation({
      query:(data)=>( {
        url: `/api/invoke/updateAsset`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['Songs'],
    }),

    createSong: builder.mutation({
      query: (newSong)=>( {
        url: `/api/invoke/createAsset`,
        method: "POST",
        body: newSong,
      }),
      invalidatesTags: ['Songs'],
    }),
  }),
});

export const {
  useGetAllSongsQuery,
  useGetSongsQuery,
  useGetSongByIdQuery,
  useDeleteSongMutation,
  useUpdateSongMutation,
  useCreateSongMutation,
} = songSlices; //hook para solicitar datos //esto es un hook que da redux toolkit para usarlo en el frontend y me permite maejar cuadno esta cargando , cuando hay un error, etc
