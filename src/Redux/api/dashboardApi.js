import { baseApi } from "../baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allCustomer: builder.query({
      query: () => ({
        url: "/users/all-users-count",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    incomeByYear: builder.query({
      query: (year) => ({
        url: `/users/all-users-rasio?year=${year}`,
        method: "GET",
      }),
      providesTags: ["income"],
    }),

    incomeByDays: builder.query({
      query: (days) => ({
        url: `/payment/all-income-rasio-by-days?days=${days}`,
        method: "GET",
      }),
      providesTags: ["income"],
    }),

    incomeByHour: builder.query({
      query: (hour) => ({
        url: `/payment/all-income-rasio-by-days?days=${hour}`,
        method: "GET",
      }),
      providesTags: ["income"],
    }),

    

    addTask: builder.mutation({
      query: (data) => ({
        url: "/task/sign-in",
        method: "POST",
        body: data,
        headers: {
          "content-type": "application/json",
        },
      }),
      invalidatesTags: ["task"],
    }),
    SingleTask: builder.query({
      query: (id) => ({
        url: `/task/${id}`,
        method: "GET",
      }),
      providesTags: ["task"],
    }),

    getAllTasks: builder.query({
      query: () => ({
        url: "/task",
        method: "GET",
        // headers: {
        //   "content-type": "application/json",
        //   Authorization: `${accessToken}`,
        // },
      }),
      providesTags: ["task"],
    }),

    // admin tasks assign cencel and get pending task

    getAllPendingPaymentTask: builder.query({
      query: () => ({
        url: "/task?taskStatus=pending",
        method: "GET",
        // headers: {
        //   "content-type": "application/json",
        //   Authorization: `${accessToken}`,
        // },
      }),
      providesTags: ["task"],
    }),

    acceptTasksRequest: builder.mutation({
      query: (id) => {
        console.log("accept task id", id);
        return {
          url: `/task/task-conform/${id}`,
          method: "PUT",
          // headers: {
          //   "content-type": "application/json",
          //   Authorization: `${accessToken}`,
          // },
        };
      },
      invalidatesTags: ["task"],
    }),

    cencelTasksRequest: builder.mutation({
      query: (id) => ({
        url: `/task/task-cencel/${id}`,
        method: "PUT",
        // headers: {
        //   "content-type": "application/json",
        //   Authorization: `${accessToken}`,
        // },
      }),
      invalidatesTags: ["task"],
    }),
    adminConformWithdraw: builder.mutation({
      query: ({ id, data }) => ({
        url: `/withdraw/admin-approved/${id}`,
        method: "POST",
        body: data,
        // headers: {
        //   "content-type": "application/json",
        //   Authorization: `${accessToken}`,
        // },
      }),
      invalidatesTags: ["withdraw"],
    }),
    // getNotifications: builder.query({
    //   query: () => {
    //     const accessToken = localStorage.getItem("accessToken");
    //     console.log(accessToken);
    //     if (!accessToken) {
    //       console.error("Access token not found.");
    //     }
    //     return {
    //       url: "/notification/admin-all",
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     };
    //   },
    //   providesTags: ["notification"],
    // }),
  }),
});

export const {
  useAllCustomerQuery,
  useIncomeByYearQuery,
  useIncomeByDaysQuery,
  useIncomeByHourQuery,
  //   useGetAllTasksQuery,
  //   useAddTaskMutation,
  //   useSingleTaskQuery,
  //   useGetAllTasksRequestsQuery,
  //   useGetAllPendingPaymentTaskQuery,
  //   useAcceptTasksRequestMutation,
  //   useCencelTasksRequestMutation,
  //   useGetAllTasksPaymentQuery,
  //   useGetAllPendingWithdrawQuery,
  //   useGetAllConformWithdrawQuery,
  //   useAdminConformWithdrawMutation,
  //   // useGetNotificationsQuery,
} = dashboardApi;
