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
            fields: ["@key", "name", "about", "@assetType"],
          },
        },
      }),
      providesTags: ["Artist"],
      transformResponse: (response) => {
        return response.result;
      },
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
            limit: 4,
          },
        },
      }),
      transformResponse: (response) => {
        return response.result;
      },
      invalidatesTags: ["Artist"],
    }),
    getArtistById: builder.query({
      query: (id) => ({
        url: `/api/query/search`,
        method: "POST",
        body: {
          query: {
            selector: {
              "@assetType": "artist",
              "@key": id,
            },
            fields: ["@key", "name", "about", "@assetType"],
          },
        },
      }),
      transformResponse: (response) => {
        return response.result[0];
      },
      invalidatesTags: ["Artist"],
    }),

    deleteArtist: builder.mutation({
      query: (id) => ({
        url: `/api/invoke/deleteAsset`,
        method: "DELETE",
        body: {
          key: {
            "@assetType": "artist",
            "@key": id,
          },
        },
      }),
      invalidatesTags: ["Artist"],
    }),
    updateArtist: builder.mutation({
      query: (artistId,nameArtist,aboutArtist) => ({
        url: `/api/invoke/updateAsset`,
        method: "PUT",
        body: {
          update:
          {"@assetType":"artist",
          "@key":artistId,
          "about":aboutArtist,
          "name":nameArtist, 
        }
        },
      }),
      invalidatesTags: ["Artist"],
    }),

    createArtist: builder.mutation({
      query: (nameArtist,about) => ({
        url: `/api/invoke/createAsset`,
        method: "POST",
        body:
          {"asset":[{
            "@assetType":"artist",
            "name":nameArtist, 
            "about":about}]
        },
      }),
      invalidatesTags: ["Artist"],
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
