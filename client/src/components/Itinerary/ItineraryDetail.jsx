import React, { useEffect, useState } from 'react';
import { getItinerary } from '../../services/itineraryService';
import { useParams } from 'react-router-dom';

const ItineraryDetail = () => {
  const { id } = useParams();
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      const data = await getItinerary(id);
      setItinerary(data);
    };

    fetchItinerary();
  }, [id]);

  if (!itinerary) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{itinerary.title}</h1>
      <p>{itinerary.date}</p>
      <ul>
        {itinerary.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryDetail;
