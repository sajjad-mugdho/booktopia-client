import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => "/book",
    }),
    singleBook: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getComment: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const { useGetBookQuery } = bookApi;
