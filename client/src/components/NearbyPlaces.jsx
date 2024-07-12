import React, { useState } from 'react';
import { getNearbyPlaces } from '../services/itineraryService';

const NearbyPlaces = () => {
  const [hotelId, setHotelId] = useState('1676161');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNearbyPlaces = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getNearbyPlaces(hotelId);
      setPlaces(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Nearby Places</h2>
      <form onSubmit={(e) => { e.preventDefault(); fetchNearbyPlaces(); }}>
        <input
          type="text"
          value={hotelId}
          onChange={(e) => setHotelId(e.target.value)}
          placeholder="Hotel ID"
          required
        />
        <button type="submit">Fetch Nearby Places</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyPlaces;
