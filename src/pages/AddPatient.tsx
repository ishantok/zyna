import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for navigation

export default function AddPatient() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    Placeofbirth: '',
    city: '',
    specialization: '',
    profilePicture: '',  // Add state for profile picture
  });

  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, like sending data to the server
    console.log(formData);
    // After successful submission, you can redirect to a different page
    navigate('/home'); // Redirect to home page or another desired route
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle file upload logic (e.g., upload to server)
      setFormData({ ...formData, profilePicture: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add Patient</h2>
        <button onClick={() => navigate('/home')} className="px-4 py-2 bg-black text-white rounded-md">
          Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <select className="w-20 p-2 border rounded-l-md border-r-0">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 p-2 border rounded-r-md"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date Of Birth (MM/DD/YYYY) <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Place of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="String"
                name="Placeofbirth"
                value={formData.Placeofbirth}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Place of Birth"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select City</option>
                <option value="delhi">delhi</option>
                <option value="kolkata">kolkata</option>
                <option value="bangalore">bangalore</option>
              </select>
            </div>
            
          </div>

          <button type="submit" className="w-full mt-8 p-3 bg-green-600 text-white rounded-md hover:bg-green-700">
            Add
          </button>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Profile Picture</h3>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full mb-4 overflow-hidden">
                <img
                  src={formData.profilePicture || "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"}
                  alt="Doctor placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="file"
                onChange={handleProfilePictureChange}
                className="w-full p-2 bg-blue-500 text-white rounded-md"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


