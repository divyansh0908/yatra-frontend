import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips} from "../store/trip.action"
import DisplayBasicDetails from '../components/DisplayBasicDetails';

function CancellationPage1() {
  const dispatch = useDispatch();

  const { trips, loading } = useSelector((state) => state.trip);
  
  useEffect(() => {
    dispatch(fetchTrips());

  }, [])
  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <>
    <div>Step 1</div>

    {
      trips.map((trip) => {
        return (
          (trip.passengers.length>0) &&
          <DisplayBasicDetails trip={trip} />
        )
      })
    }
    </>
  )
}

export default CancellationPage1