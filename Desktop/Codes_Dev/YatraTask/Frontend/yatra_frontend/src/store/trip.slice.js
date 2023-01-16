import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trips: [],
    selectedTrip: null,
    loading: false,
    error: null,
    refundDetails: null,
};

const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers: {
        getTrips: (state) => {
            state.loading = true;
        },
        setTripsSuccess: (state, action) => {
            state.trips = action.payload;
            state.loading = false;
            state.error = null;
        },
        setSelectedTrip: (state, action) => {
            state.selectedTrip = action.payload;
        },
        removeSelectedTrip: (state) => {
            state.selectedTrip = null;
        },
        setRefundDetails: (state, action) => {
            state.refundDetails = action.payload;
            state.loading = false;
            state.error = null;
        },
        resetRefundDetails: (state) => {
            state.refundDetails = null;
        }

    }
});

export const { getTrips, setTripsSuccess, setSelectedTrip, removeSelectedTrip, setRefundDetails, resetRefundDetails } = tripSlice.actions;
export default tripSlice.reducer;