import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItineraryForm from "./ItineraryForm";
import ItineraryDetail from "./ItineraryDetail";
import Itinerary from "./Itinerary";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import NearbyPlaces from "./components/NearbyPlaces ";
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
            <Route path="/nearby-places" component={NearbyPlaces} />

        </Routes>
    );
};

export default AppRoutes;
