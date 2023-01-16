import { getTrips, setTripsSuccess, setRefundDetails } from './trip.slice'

export const fetchTrips = () => async (dispatch) => {
    dispatch(getTrips());
    const response = await fetch('http://localhost:5000/trips');
    const data = await response.json();
    // console.log("data", data);
    dispatch(setTripsSuccess(data));
}

export const fetchTripCancellationDetails = (trip) => async (dispatch) => {
    dispatch(getTrips());
    console.log("trip", trip);
    const response = await fetch(`http://localhost:5000/trips/cancellation`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({tripId:trip.tripId, passengerEmailIds: trip.passengerEmailIds}),
            });
    const data = await response.json();
    console.log("data", data);
    dispatch(setRefundDetails(data));
}

