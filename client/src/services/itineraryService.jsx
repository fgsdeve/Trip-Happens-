import axios from 'axios';

// Constants for API URLs and headers
const API_URL = '/api/itineraries/';
const RAPIDAPI_KEY = 'd875bf90b3msh5322d0212594c58p18188djsnf6a23b67e4d7';
const RAPIDAPI_HOST = 'booking-com.p.rapidapi.com';

// Function to get the authentication token
const getAuthToken = () => {
  const token = localStorage.getItem('token');
  console.log('Retrieved token:', token); // Log the token to verify
  return token;
};

// Function to get all itineraries
const getItineraries = async () => {
  const token = getAuthToken();
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching itineraries:', error);
    throw error;
  }
};

// Function to create a new itinerary
const createItinerary = async (itineraryData) => {
  const token = getAuthToken();
  try {
    const response = await axios.post(API_URL, itineraryData, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating itinerary:', error);
    throw error;
  }
};

// Function to get a single itinerary by ID
const getItinerary = async (id) => {
  const token = getAuthToken();
  try {
    const response = await axios.get(`${API_URL}${id}`, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching itinerary with ID ${id}:`, error);
    throw error;
  }
};

// Function to delete an itinerary by ID
const deleteItinerary = async (id) => {
  const token = getAuthToken();
  try {
    const response = await axios.delete(`${API_URL}${id}`, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error deleting itinerary with ID ${id}:`, error);
    throw error;
  }
};

// Function to get nearby places for a hotel
const getNearbyPlaces = async (hotelId, locale = 'en-gb') => {
  const options = {
    method: 'GET',
    url: `https://${RAPIDAPI_HOST}/v1/hotels/nearby-places`,
    params: {
      hotel_id: hotelId,
      locale: locale,
    },
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching nearby places:', error);
    throw error;
  }
};

export { getItineraries, createItinerary, getItinerary, getNearbyPlaces, deleteItinerary };
