import React, { useState, useEffect } from 'react';
import { createItinerary, getItinerary, updateItinerary } from '../../services/itineraryService';
import { useNavigate, useParams } from 'react-router-dom';

const ItineraryForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [activities, setActivities] = useState(['']);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchItinerary = async () => {
        try {
          const data = await getItinerary(id);
          setTitle(data.title);
          setDate(data.date);
          setActivities(data.activities);
        } catch (error) {
          console.error(`Error fetching itinerary with ID ${id}:`, error);
        }
      };

      fetchItinerary();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itineraryData = { title, date, activities };

    try {
      if (id) {
        await updateItinerary(id, itineraryData);
      } else {
        await createItinerary(itineraryData);
      }
      navigate('/itinerary');
    } catch (error) {
      console.error('Error saving itinerary:', error);
    }
  };

  const handleActivityChange = (index, value) => {
    const newActivities = [...activities];
    newActivities[index] = value;
    setActivities(newActivities);
  };

  const addActivity = () => {
    setActivities([...activities, '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      {activities.map((activity, index) => (
        <input
          key={index}
          type="text"
          value={activity}
          onChange={(e) => handleActivityChange(index, e.target.value)}
          placeholder="Activity"
          required
        />
      ))}
      <button type="button" onClick={addActivity}>Add Activity</button>
      <button type="submit">Save Itinerary</button>
    </form>
  );
};

export default ItineraryForm;
