import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
  endpoints: (build) => ({
    getTrips: build.query({
      query: () => `/trips`,
    }),
    getActivitiesByTrip: build.query({
      query: (trip) => `/trips/${trip.id}/activities`,
    }),
  }),
});

export const { useGetTripsQuery, useGetActivitiesByTripQuery } =
  apiSlice;
