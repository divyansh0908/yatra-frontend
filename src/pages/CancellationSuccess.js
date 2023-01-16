import React from "react";
import { useNavigate } from "react-router-dom";

const TripCancellationSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-medium text-green-500">
        Trip Cancellation Successful
      </h1>
      <p className="text-lg text-gray-700">
        We're sorry to hear that you had to cancel your trip. Your trip has been
        successfully cancelled and a refund will be processed shortly.
      </p>
      <p className="text-lg text-gray-700">
        We hope you'll consider traveling with us again in the future.
      </p>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
      onClick={()=>navigate("/")}>
        Return to Homepage
      </button>
    </div>
  );
};

export default TripCancellationSuccessPage;
