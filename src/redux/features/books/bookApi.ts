import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getLastBooks: builder.query({
      query: () => "/books/last",
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
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

export const {
  useGetBooksQuery,
  useGetLastBooksQuery,
  useGetSingleBookQuery,
  useLazyGetLastBooksQuery,
  usePostBookMutation,
} = bookApi;
