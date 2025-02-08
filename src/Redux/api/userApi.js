import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "/users/all-users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    userProfile: builder.query({
      query: () => ({
        url: "/users/all-users-count",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useAllUsersQuery } = userApi;
