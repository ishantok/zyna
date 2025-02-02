import React, { useState } from "react";

interface Appointment {
  id: number;
  date: string;
  description: string;
}

const AppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, date: "2025-02-01", description: "Dentist appointment" },
    { id: 2, date: "2025-02-05", description: "Business meeting" },
  ]);

  const [searchId, setSearchId] = useState<string>("");
  const [filteredAppointment, setFilteredAppointment] = useState<Appointment | null>(null);

  const handleSearch = () => {
    const found = appointments.find((appt) => appt.id === Number(searchId));
    setFilteredAppointment(found || null);
  };

  const handleDelete = (id: number) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Appointments
      </h1>

      {/* Search Box */}
      <div className="flex items-center gap-2 mb-6">
        <input
          type="number"
          className="border p-2 w-full rounded"
          placeholder="Enter Appointment ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Display Searched Appointment */}
      {filteredAppointment && (
        <div className="p-4 mb-4 bg-white shadow rounded">
          <p className="text-gray-700">
            <strong>ID:</strong> {filteredAppointment.id}
          </p>
          <p className="text-gray-700">
            <strong>Date:</strong> {filteredAppointment.date}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {filteredAppointment.description}
          </p>
        </div>
      )}

      {/* List of Appointments */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        All Appointments
      </h2>
      <div className="space-y-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white p-4 shadow rounded flex justify-between items-center"
          >
            <div>
              <p className="text-gray-700">
                <strong>ID:</strong> {appt.id}
              </p>
              <p className="text-gray-700">
                <strong>Date:</strong> {appt.date}
              </p>
              <p className="text-gray-700">
                <strong>Description:</strong> {appt.description}
              </p>
            </div>
            <button
              onClick={() => handleDelete(appt.id)}
              className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;
