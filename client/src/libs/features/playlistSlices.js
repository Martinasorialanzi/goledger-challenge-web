import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playlistSlices = createApi({
  reducerPath: "playlist",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-44-204-53-62.compute-1.amazonaws.com",
  }),
  endpoints: (builder) => ({
    
    getAllPlaylists: builder.query({
      query: () => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "playlist",
            },
            fields: ["@key", "name", "description", "songs"]
          },
        },
      }),
      providesTags: ['Playlist'],
      transformResponse:(response)=>{
        return response.result
        },
    }),
    getPlaylistById: builder.query({
      query:(id)=>( {
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "playlist",
              "@key": id,
            },
            fields: ["@key", "name", "description", "songs"]
          },
        },
      }),
      invalidatesTags: ['Playlist'],
      transformResponse:(response)=>{
        return response.result[0]
        },
    }),
    deletePlaylist: builder.mutation({
      query:(id)=>( {
        url: `/api/invoke/deleteAsset`,
        method: "DELETE",
        body: {
          "key": {
              "@assetType": "playlist",
              "@key": id,
          },
        },
      }),
      invalidatesTags: ['Playlist'],
    }),
    updatePlaylist: builder.mutation({
      query:(dataPlaylist)=>( {
        url: `/api/invoke/updateAsset`,
        method: "PUT",
        body: dataPlaylist,
      }),
      invalidatesTags: ['Playlist'],
    }),

    createPlaylist: builder.mutation({
      query:(newPlaylist)=>({
        url: `/api/invoke/createAsset`,
        method: "POST",
        body: newPlaylist,
      }),
      invalidatesTags: ['Playlist'],
    }),
  }),
});

export const {
  useGetAllPlaylistsQuery,
  useGetPlaylistByIdQuery,
  useDeletePlaylistMutation,
  useUpdatePlaylistMutation,
  useCreatePlaylistMutation,
} = playlistSlices; 
