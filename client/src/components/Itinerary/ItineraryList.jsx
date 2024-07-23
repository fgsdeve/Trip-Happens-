import React, { useEffect, useState } from 'react';
import { getItineraries, deleteItinerary } from '../../services/itineraryService';
import { Link } from 'react-router-dom';

const ItineraryList = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItineraries();
        setItineraries(data);
      } catch (error) {
        console.error('Error fetching itineraries:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteItinerary(id);
      setItineraries(itineraries.filter(itinerary => itinerary._id !== id));
    } catch (error) {
      console.error(`Error deleting itinerary with ID ${id}:`, error);
    }
  };

  return (
    <div>
      <h1>Your Itineraries</h1>
      <Link to="/itinerary/new">Create New Itinerary</Link>
      {itineraries.map(itinerary => (
        <div key={itinerary._id}>
          <h2>{itinerary.title}</h2>
          <p>{itinerary.date}</p>
          <Link to={`/itinerary/${itinerary._id}`}>View</Link>
          <Link to={`/itinerary/edit/${itinerary._id}`}>Edit</Link>
          <button onClick={() => handleDelete(itinerary._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItineraryList;
