import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseUrl =
  process.env.REACT_APP_BASE_URL || "https://full-app-p8cv.onrender.com";

export const blogApis = createApi({
  reducerPath: "blogApis",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    getAllBlogs: builder.mutation({
      query: (payload) => ({
        url: "/blogs",
        method: "GET",
      }),
    }),

    getBlogById: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBlogsMutation, useGetBlogByIdMutation } = blogApis;
