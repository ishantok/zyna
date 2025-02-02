import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import this
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddAppointment from './pages/AddAppointment';
import AddDoctor from './pages/AddDoctor';
import AddPatient from './pages/AddPatient';
import AppointmentsPage from './pages/AppointmentsPage';
import ProfilePage from './pages/ProfilePage';
import PrescriptionPage from './pages/PrescriptionPage';

function App() {
  return (
    <GoogleOAuthProvider clientId="335319103184-ets60r8f3vubf73lmfurveg6u0mutf33.apps.googleusercontent.com"> {/* Wrap the app in this provider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/AddAppointment" element={<AddAppointment />} />
          <Route path="/AddDoctor" element={<AddDoctor />} />
          <Route path="/addPatient" element={<AddPatient />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/addpriscription" element={<PrescriptionPage />} />

        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
