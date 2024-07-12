import React, { useEffect, useState } from 'react';
import { getNearbyPlaces } from '../../services/itineraryService';

const ItineraryList = () => {
    const [itineraries, setItineraries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getNearbyPlaces();
            setItineraries(data);
        };

    fetchData();
    }, []);

return (
    <div>
    {itineraries.map(itinerary => (
        <div key={itinerary._id}>
            <h2>{itinerary.title}</h2>
            <p>{itinerary.date}</p>
        </div>
        ))}
    </div>
    );
};

export default ItineraryList;
