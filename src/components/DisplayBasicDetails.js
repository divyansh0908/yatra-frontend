import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faLocationDot,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedTrip } from "../store/trip.slice";
import moment from "moment/moment";

function DisplayBasicDetails({ trip }) {
  const [passenger, setPassenger] = useState(trip.passengers);
  const navigate = useNavigate();
  const [selectedPassenger, setSelectedPassenger] = useState([]);
  const { selectedTrip } = useSelector((state) => state.trip);
  const dispatch = useDispatch();
  useEffect(() => {
   
    if (selectedTrip){
        if (selectedTrip.tripId === trip._id) {
            setSelectedPassenger(selectedTrip.passengerEmailIds);
        }else{
            setSelectedPassenger([]);
        }
    }
    }, []);
  const handleAddPassenger = (passenger) => {
    setSelectedPassenger([...selectedPassenger, passenger.passengerEmail]);
    if (selectedTrip?.id !== trip._id) {
      const passengerEmailIds = selectedPassenger;
      const tripId = trip._id;
      const tripToAdd = {
        tripId,
        passengerEmailIds,
      };
      dispatch(setSelectedTrip(tripToAdd));
    } else {
      const passengerEmailIds = selectedPassenger;
      const tripId = trip._id;
      const tripToAdd = {
        tripId,
        passengerEmailIds,
      };
      dispatch(setSelectedTrip(tripToAdd));
    }
  };
  const handleRemovePassenger = (passenger) => {
    const passengerEmailIds = selectedPassenger.filter(
      (passengerEmail) => passengerEmail !== passenger.passengerEmail
    );
    setSelectedPassenger(passengerEmailIds);
    const tripId = trip._id;
    if (passengerEmailIds.length === 0) {
      dispatch(setSelectedTrip(null));
    } else {
      const trip = {
        tripId,
        passengerEmailIds,
      };
      dispatch(setSelectedTrip(trip));
    }
  };
  const handleNext = () => {
    dispatch(
      setSelectedTrip({
        tripId: trip._id,
        passengerEmailIds: selectedPassenger,
      })
    );
    navigate("/cancellation2");
  };

  return (
    <div className="px-10 w-full my-4">
      <div className="flex flex-col justify-between border-gray-400 shadow-md  border-4 rounded-md">
        <div className=" pl-2 py-2 md:px-8 flex flex-col md:flex-row justify-between text-start  bg-gray-300 w-full">
          <h1 className="text-xl font-semibold">Trip Id: {trip._id}</h1>
          <h1 className="text-xl font-semibold">
            Date: {moment(trip.tripDate).format("MMMM Do YYYY")}
          </h1>
        </div>
        <div className="px-2 md:px-8 py-2 flex flex-row justify-between text-start w-full ">
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faLocation} className="text-2xl mr-2" />
            <h2>{trip.source}</h2>
          </div>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faPlane} className="text-2xl mr-2" />
          </div>
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl mr-2" />
            <h2>{trip.destination}</h2>
          </div>
        </div>

        <h1 className="text-xl my-2 text-start font-semibold px-4">
          Select Passengers
        </h1>
        {/* checkbox for selecting passenger */}
        <div className="flex flex-col px-4">
          {passenger.map((passenger) => (
            <div className="flex flex-row">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 my-2 px-4"
                onChange={(e) => {
                  if (e.target.checked) {
                    handleAddPassenger(passenger);
                  } else {
                    handleRemovePassenger(passenger);
                  }
                }}
                checked={selectedPassenger.includes(passenger.passengerEmail)}
              />
              <h1 className="text-xl mx-4 font-semibold">
                {passenger.passengerName}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-end mx-4">
          <button
            className={`py-4 px-8 rounded-md text-xl font-semibold mb-2 mx-2 ${
              (
              selectedTrip?.tripId !== trip._id)
                ? "bg-gray-300 text-black cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
            onClick={handleNext}
            disabled={
                selectedPassenger.length === 0 &&
                selectedTrip?.tripId !== trip._id
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayBasicDetails;
