import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getLastBooks: builder.query({
      query: () => "/books/last",
    }),
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: "/books/create-book",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetLastBooksQuery, usePostBookMutation } =
  bookApi;
