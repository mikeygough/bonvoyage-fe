import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
  tagTypes: ['Trip', 'Activity'],
  endpoints: (build) => ({
    getTrips: build.query({
      query: () => `/trips`,
      providesTags: [{ type: 'Trip', id: 'LIST' }],
    }),
    getActivitiesByTrip: build.query({
      query: (trip) => `/trips/${trip.id}/activities`,
      providesTags: (result, error, trip) => [
        { type: 'Activity', id: trip.id },
      ],
    }),
    addTrip: build.mutation({
      query: (trip) => ({
        url: `trips`,
        method: 'POST',
        body: trip,
      }),
      invalidatesTags: [{ type: 'Trip', id: 'LIST' }],
    }),
    addActivity: build.mutation({
      query: ({ tripId, activity }) => ({
        url: `trips/${tripId}/activities`,
        method: 'POST',
        body: { activity },
      }),
      invalidatesTags: (result, error, { tripId }) => [
        { type: 'Activity', id: tripId },
      ],
    }),
  }),
});

export const {
  useGetTripsQuery,
  useGetActivitiesByTripQuery,
  useAddTripMutation,
  useAddActivityMutation,
} = apiSlice;
