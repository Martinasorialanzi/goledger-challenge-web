import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumSlices = createApi({
  reducerPath: "album",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-44-204-53-62.compute-1.amazonaws.com",
  }),
  endpoints: (builder) => ({
    getAllAlbums: builder.query({
      query: () => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "album",
            },
            fields: ["@key", "title", "artists", "explicit"],
          },
        },
      }),
      providesTags: ["Album"],
      transformResponse: (response) => {
        return response.result;
      },
    }),
    getAlbums: builder.query({
      query: () => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "album",
            },
            fields: ["@key", "title", "artists", "explicit"],
            limit: 6,
          },
        },
      }),
      providesTags: ["Album"],
      transformResponse: (response) => {
        return response.result;
      },
    }),
    getAlbumById: builder.query({
      query: (id) => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "album",
              "@key": id,
            },
            fields: ["@key", "title", "artist.@key", "explicit"],
          },
        },
      }),
      invalidatesTags: ["Album"],
      transformResponse: (response) => {
        return response.result[0];
      },
    }),
    deleteAlbum: builder.mutation({
      query: (id) => ({
        url: `/api/invoke/deleteAsset`,
        method: "DELETE",
        body: {
          key: {
            "@assetType": "album",
            "@key": id,
          },
        },
      }),
      invalidatesTags: ["Album"],
    }),
    updateAlbum: builder.mutation({
      query: (dataAlbum) => ({
        url: `/api/invoke/updateAsset`,
        method: "PUT",
        body: {
          update: {
            "@assetType": "album",
            "@key": artistId,
            title: titleAlbum,
          },
        },
      }),
      invalidatesTags: ["Album"],
    }),

    createAlbum: builder.mutation({
      query: (artistKey,title,date) => ({
        url: `/api/invoke/createAsset`,
        method: "POST",
        body: {
            "asset":[{
              "@assetType":"album",
              "artist":{artistKey},
              "title":title,
              "releaseDate":date}
          ],
        },
      }),
      invalidatesTags: ["Album"],
    }),
  }),
});

export const {
  useGetAllAlbumsQuery,
  useGetAlbumsQuery,
  useGetAlbumByIdQuery,
  useDeleteAlbumMutation,
  useUpdateAlbumMutation,
  useCreateAlbumMutation,
} = albumSlices;
