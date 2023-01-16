import React, {useState} from 'react'
import AskForCancellationModal from '../components/AskForCancellationModal'
import {  useSelector, useDispatch } from 'react-redux'
import CancellationDetails from '../components/CancellationDetails';
import TravelDetails from '../components/TravelDetails';
import { cancelTrip } from '../API/cancelTrip';
import { useNavigate } from 'react-router-dom';
import { removeSelectedTrip } from '../store/trip.slice';

function CancellationPage3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [verdict, setVerdict] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { selectedTrip, loading,  refundDetails, trips } = useSelector(
    (state) => state.trip
  );
  const selectedTripDetails = trips.filter(
    (trip) => trip._id === selectedTrip.tripId
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  const handleSubmit =async () => {
    const [data,err] = await cancelTrip(selectedTrip);
    if(err){
      alert(err)
    }
    else{
      dispatch(removeSelectedTrip());
      navigate('/success');
    }
    
  }
  return (
    <>
      <div>Step 3</div>
      <TravelDetails trip={selectedTripDetails[0]} />
      {refundDetails?.passengerRefundDetails && (
        <CancellationDetails
          passengerRefundDetails={refundDetails.passengerRefundDetails}
          totalFare={refundDetails.totalFare}
          refundAmount={refundDetails.totalRefundAmount}
          cancellationCharges={refundDetails.totalCancellationCharges}
        />
      )}
      <div className='w-1/2 p-4 rounded-md mx-auto bg-red-300 flex '>
        <div className='flex flex-row justify-center items-center'>
          <input type='checkbox' className='h-5 w-5 mx-4' onChange={(e) => setVerdict(e.target.checked)} />
          I give my consent to cancel the trip
          </div>
          
      </div>
      <div className="flex flex-row justify-evenly mt-4">
      <button className={`py-2 px-4 rounded-md text-lg font-semibold ${(verdict) ? "bg-blue-800 text-white": "bg-slate-400 "} `} onClick={() => setShowModal(true)} disabled={!verdict}>Submit</button>


      </div>
     {showModal&& <AskForCancellationModal onCancel={()=>setShowModal(false) } onConfirm={handleSubmit} />}
    </>)
}

export default CancellationPage3