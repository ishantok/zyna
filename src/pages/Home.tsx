import { Link, useNavigate, NavLink } from 'react-router-dom';
import { 
  Activity, 
  Search, 
  Bell, 
  Calendar,
  Clock,
  Users,
  User,
  FileText,
  Plus,
  LogOut
} from 'lucide-react';

// AddAppointmentButton component
function AddAppointmentButton() {
  return (
    <Link
      to="/AddAppointment"
      className="flex items-center space-x-2 bg-[#111827] text-white px-4 py-2 rounded-lg hover:bg-gray-800"
    >
      <Plus className="h-5 w-5" />
      <span>Add New Appointment</span>
    </Link>
  );
}

// AddDoctor component
function AddDoctor() {
  return (
    <Link
      to="/AddDoctor"
      className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 border"
    >
      <Plus className="h-5 w-5" />
      <span>New Doctor</span>
    </Link>
  );
}

// AddPatient component
function AddPatient() {
  return (
    <Link
      to="/addPatient"
      className="flex items-center space-x-3 bg-white text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 border"
    >
      <Plus className="h-5 w-5" />
      <span>New Patient</span>
    </Link>
  );
}

// AddPriscription component
function AddPriscription() {
  return (
    <Link
      to="/addpriscription"
      className="flex items-center space-x-4 bg-white text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 border"
    >
      <Plus className="h-5 w-5" />
      <span>New Priscription</span>
    </Link>
  );
}


// Home component
export default function Home() {
  const currentDate = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here if needed
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#1e3a8a] text-white">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <Activity className="h-6 w-6" />
            <span className="text-xl font-bold">Zynapte Narayana</span>
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#2c4999] text-white placeholder-gray-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <nav className="space-y-4">
            <NavLink to="/" 
              className={({ isActive }) => `flex items-center space-x-3 px-4 py-2.5 ${isActive ? 'bg-[#2c4999]' : ''} rounded-lg`}
            >
              <Activity className="h-5 w-5" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/" 
              className={({ isActive }) => `flex items-center space-x-3 px-4 py-2.5 ${isActive ? 'bg-[#2c4999]' : ''} rounded-lg`}
            >
              <Clock className="h-5 w-5" />
              <span>Check-ins</span>
            </NavLink>
            <NavLink to="/appointments" 
              className={({ isActive }) => `flex items-center space-x-3 px-4 py-2.5 ${isActive ? 'bg-[#2c4999]' : ''} rounded-lg`}
            >
              <Calendar className="h-5 w-5" />
              <span>Appointments</span>
            </NavLink>
            <NavLink to="/" 
              className={({ isActive }) => `flex items-center space-x-3 px-4 py-2.5 ${isActive ? 'bg-[#2c4999]' : ''} rounded-lg`}
            >
              <FileText className="h-5 w-5" />
              <span>Transactions</span>
            </NavLink>
            <NavLink to="/" 
              className={({ isActive }) => `flex items-center space-x-3 px-4 py-2.5 ${isActive ? 'bg-[#2c4999]' : ''} rounded-lg`}
            >
              <Users className="h-5 w-5" />
              <span>Doctors</span>
            </NavLink>
            <NavLink to="/" 
              className={({ isActive }) => `flex items-center space-x-3 px-4 py-2.5 ${isActive ? 'bg-[#2c4999]' : ''} rounded-lg`}
            >
              <User className="h-5 w-5" />
              <span>Patients</span>
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">{currentDate}</span>
              <Link to="/profile">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <User className="h-6 w-6 text-gray-600" />
                </button>
              </Link>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <button onClick={handleLogout} className="p-2 hover:bg-gray-100 rounded-full">
                <LogOut className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Action Buttons */}
          <div className="flex space-x-4 mb-6">
            <AddAppointmentButton />
            <AddDoctor />
            <AddPatient />
            <AddPriscription />
          </div>

          {/* Welcome Card */}
          <div className="bg-[#1e3a8a] text-white rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
                <p className="text-blue-200">Admin - Ishant Shaw</p>
              </div>
              <div className="flex space-x-12">
                <div>
                  <p className="text-blue-200">Active Doctors</p>
                  <p className="text-4xl font-bold">5</p>
                </div>
                <div>
                  <p className="text-blue-200">Total Patients</p>
                  <p className="text-4xl font-bold">81</p>
                </div>
                <div>
                  <p className="text-blue-200">Total Appointments</p>
                  <p className="text-4xl font-bold">323</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-gray-500 mb-4">Today's Appointments</h3>
              <p className="text-4xl font-bold">4</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-gray-500 mb-4">Upcoming Appointments</h3>
              <p className="text-4xl font-bold">2</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-gray-500 mb-4">Pending Appointments</h3>
              <p className="text-4xl font-bold">7</p>
            </div>
          </div>

          {/* Bottom Statistics Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-gray-500 mb-4">Confirmed Appointments</h3>
              <p className="text-4xl font-bold">194</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <h3 className="text-red-500 mb-4">Cancelled Appointments</h3>
              <p className="text-4xl font-bold text-red-500">35</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <h3 className="text-red-500 mb-4">Rejected Appointments</h3>
              <p className="text-4xl font-bold text-red-500">33</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
