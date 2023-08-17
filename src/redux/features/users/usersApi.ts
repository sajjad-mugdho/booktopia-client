import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ data }) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: ({ data }) => ({
        url: "/users/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = userApi;
