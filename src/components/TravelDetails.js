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

function TravelDetails({ trip }) {
  return (
    <div className="px-10 w-full my-4">
      <div className="flex flex-col justify-between border-gray-300 shadow-md  border-4 rounded-md">
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
        <div className="px-2 md:px-4 py-2 flex flex-col justify-between text-start w-full ">
          <div className="flex flex-row text-start">
            <h1 className="mx-4 font-bold">Booked Passengers</h1>
          </div>
          <div className="flex flex-row text-start">
            <div className="w-36 mx-4 font-medium"><h1>S.No</h1></div>
            <div className="w-36 mx-4 font-medium"><h1>Passenger Name</h1></div>
            
            <div className="w-48 mx-4 font-medium"><h1>Email</h1></div> 
          </div>
          {trip.passengers.map((passenger, index) => (
            <div className="flex flex-row text-start">
                <div className="w-36 mx-4"><h1>{index+1}.{" "}</h1></div>
              <div className="w-36 mx-4"><h1>{passenger.passengerName}</h1></div>
              <div className="w-48 mx-4"><h1>{passenger.passengerEmail}</h1></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelDetails;
