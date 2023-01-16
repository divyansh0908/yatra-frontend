import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CancellationDetails from "../components/CancellationDetails";
import TravelDetails from "../components/TravelDetails";
import { fetchTripCancellationDetails } from "../store/trip.action";

function CancellationPage2() {
  const navigate = useNavigate();
  const { selectedTrip, loading,  refundDetails, trips } = useSelector(
    (state) => state.trip
  );
  const selectedTripDetails = trips.filter(
    (trip) => trip._id === selectedTrip.tripId
  );
  console.log("selectedTripDetails", selectedTripDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTripCancellationDetails(selectedTrip));
    // console.log("trip", trip);
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>Step 2</div>
      <TravelDetails trip={selectedTripDetails[0]} />
      {refundDetails?.passengerRefundDetails && (
        <CancellationDetails
          passengerRefundDetails={refundDetails.passengerRefundDetails}
          totalFare={refundDetails.totalFare}
          refundAmount={refundDetails.totalRefundAmount}
          cancellationCharges={refundDetails.totalCancellationCharges}
        />
      )}
      <div className="flex flex-row justify-evenly mt-4">
        <button
          className="py-2 px-4 rounded-md text-lg font-semibold bg-blue-500 text-white"
          onClick={() => navigate("/")}
        >
          Previous
        </button>
        <button
          className="py-2 px-4 rounded-md text-lg font-semibold bg-blue-500 text-white"
          onClick={() => navigate("/cancellation3")}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default CancellationPage2;
