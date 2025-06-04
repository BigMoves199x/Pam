import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Signup from './ui/Signup';
import Login from './ui/Login';
import Home from './components/Home';
import ProductForm from './ui/ProductForm';
import Dashboard from './components/Dashboard'; // Admin Dashboard
import UserDashboard from './ui/UserDashboard'; // User Dashboard
import CompleteProfile from './ui/CompleteProfile';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    setLoading(false); // Prevents flickering
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-dashboard/:userId" element={<UserDashboard />} />
        <Route path="/product" element={<ProductForm />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
