import { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import PetStayDetailsPage from './pages/PetStayDetailsPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../src/components/ProtectedRoute';
import AllListingsPage from './pages/AllListingsPage';
import Footer from './components/Footer';
import Location from './components/Location';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-listings" element={<AllListingsPage />} />
          <Route path="/location/:city" element={<Location />} />
          <Route path="/onestay/:id" element={<PetStayDetailsPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
