import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import ItineraryDetail from './components/Itinerary/ItineraryDetail';
import Profile from './pages/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ItineraryForm from './components/Itinerary/ItineraryForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/itinerary/new" element={<ItineraryForm />} />
      <Route path="/itinerary/:id" element={<ItineraryDetail />} />
      <Route path="/itinerary" element={<Itinerary />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
