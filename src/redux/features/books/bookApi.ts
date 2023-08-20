import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ search, genre, year }) => ({
        url: "/books",
        params: { search, genre, year },
      }),
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
      invalidatesTags: ["reviews"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/review/${id}`,
        method: "POST",
        body: data,
      }),
    }),
    bookUpdate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    bookDelete: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
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
  usePostReviewMutation,
  useBookUpdateMutation,
  useBookDeleteMutation,
} = bookApi;
