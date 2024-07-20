import React, { useEffect, useState } from 'react';
import { getItineraries, deleteItinerary } from '../../services/itineraryService';
import { Link } from 'react-router-dom';

const ItineraryList = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItineraries();
      setItineraries(data);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteItinerary(id);
    setItineraries(itineraries.filter(itinerary => itinerary._id !== id));
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
