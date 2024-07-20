import React from "react";
import NearbyPlaces from "../components/NearbyPlaces";
import BeachVideo from '../assets/images/Beach.mp4';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <div className="video-background">
        <video autoPlay muted loop>
        <source src={BeachVideo} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <h1 className="welcome">Welcome to Trip Happens</h1>
        <p className="intro">
          Coming up with a travel itinerary can be tedious and at times,
          stressful. We wanted to change that potentially negative planning
          experience into an easy one. All you have to do is pick what country you
          would like to travel to, answer a few questions, and we will do the
          rest. You will get an itinerary based on your selections with a rough
          estimate how much the trip would cost. Our site is completely free to
          use! To get started just create an account and start planning your dream
          trip.
        </p>
        {/*<NearbyPlaces/>*/}
      </div>
    </div>
  );
};

export default Home;
