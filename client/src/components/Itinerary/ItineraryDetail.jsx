import React, {useState, useEffect} from 'react';
import {getItinerary} from '../../services/itineraryService';

const ItineraryDetail = ({match}) => {
    const [itinerary, setItinerary] = useState(null);

    useEffect(() => {
        const fetchItinerary = async () => {
            const data = await getItinerary(match.params.id);
            setItinerary(data);
        };

        fetchItinerary();
    }, [match.params.id]);

    if (!itinerary) {
        return <div>Loading..</div>;
    }

    return (
        <div>
            <h1>{itinerary.title}</h1>
            <p>{itinerary.date}</p>
            <ul>
                {itinerary.activities.map((activity, index) => {
                    <li key={index}>{activity}</li>
                })}
            </ul>
        </div>
    );
};

export default ItineraryDetail;