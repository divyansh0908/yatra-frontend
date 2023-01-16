import React from 'react';
import { useNavigate } from 'react-router-dom';

const CancellationDetails = ({ passengerRefundDetails, totalFare, refundAmount, cancellationCharges }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-medium mb-4">Cancellation Details</h2>
      <table className="w-full text-left table-collapse border-gray-200 border-2 mb-2">
        <thead>
          <tr>
            <th className="text-sm font-medium text-gray-600 p-2 bg-gray-200">Name</th>
            <th className="text-sm font-medium text-gray-600 p-2 bg-gray-200">Email</th>
            <th className="text-sm font-medium text-gray-600 p-2 bg-gray-200">Booking Amount</th>
            <th className="text-sm font-medium text-gray-600 p-2 bg-gray-200">Cancellation Charge</th>
          </tr>
        </thead>
        <tbody>
          {passengerRefundDetails.map((passenger, index) => (
            <tr key={index}>
              <td className="p-2 border-t">{passenger.passengerName}</td>
              <td className="p-2 border-t">{passenger.passengerEmailId}</td>
              <td className="p-2 border-t">{passenger.passengerFare}</td>
                <td className="p-2 border-t">{passenger.passengerCancellationCharges}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2 className="text-lg text-start font-medium mb-2">Total Fare: {totalFare}</h2>
        <h2 className="text-lg text-start font-medium mb-2">Total Refund Amount: {refundAmount}</h2>
        <h2 className="text-lg text-start font-medium mb-2">Total Cancellation Charges: {cancellationCharges}</h2>

      </div>
      {/* Display rest of the details */}
      
    </div>
  );
};

export default CancellationDetails;