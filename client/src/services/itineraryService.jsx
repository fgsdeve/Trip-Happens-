import axios from 'axios';

const API_URL = '/api/itineraries/';

const getItineraries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createItinerary = async (itineraryData) => {
  const response = await axios.post(API_URL, itineraryData);
  return response.data;
};

const getItinerary = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

const getNearbyPlaces = async (hotelId, locale = 'en-gb') => {
  const options = {
    method: 'GET',
    url: `https://booking-com.p.rapidapi.com/v1/hotels/nearby-places`,
    params: {
      hotel_id: hotelId,
      locale: locale,
    },
    headers: {
      'x-rapidapi-key': 'd875bf90b3msh5322d0212594c58p18188djsnf6a23b67e4d7',
      'x-rapidapi-host': 'booking-com.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getItineraries, createItinerary, getItinerary, getNearbyPlaces };
