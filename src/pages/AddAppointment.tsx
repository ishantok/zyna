import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AddAppointment() {
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [status, setStatus] = useState('CONFIRMED');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add New Appointment</h2>
        <X className="h-6 w-6 text-gray-500 cursor-pointer" />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <select className="w-full p-2 border rounded-md">
            <option value="">Select Patient</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">Or</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add patient
          </button>
        </div>
        <div>
          <select className="w-full p-2 border rounded-md">
            <option value="">Select Doctor</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Type
            </label>
            <select
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Appointment Type</option>
              <option value="consultation">Consultation</option>
              <option value="followup">Follow-up</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Date
            </label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time Slot
            </label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Time Slot</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border rounded-md bg-green-50"
            >
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="PENDING">PENDING</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Status
            </label>
            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Payment Status</option>
              <option value="PAID">Paid</option>
              <option value="PENDING">Pending</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Payment Method</option>
              <option value="CASH">Cash</option>
              <option value="CARD">Card</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fee
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Amount
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border rounded-md">Close</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Add Appointment
        </button>
      </div>
    </div>
  );
}

