import axios from 'axios';

const API_KEY = 'd875bf90b3msh5322d0212594c58p18188djsnf6a23b67e4d7';
const API_HOST = 'booking-com.p.rapidapi.com';

const getNearbyPlaces = async (hotelId, locale = 'en-gb') => {
  const options = {
    method: 'GET',
    url: `https://${API_HOST}/v1/hotels/nearby-places`,
    params: {
      hotel_id: hotelId,
      locale: locale,
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
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

export { getNearbyPlaces };
