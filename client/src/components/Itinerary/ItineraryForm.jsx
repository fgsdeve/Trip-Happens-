import React, {useState} from 'react';
import {createItinerary} from '../../services/itineraryService';

const ItineraryForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [activities, setActivities] = useState(['']);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newItinerary = { title, date, activities };
      await createItinerary(newItinerary);
      // Handle successful creation (redirect, show success message, etc.)
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
        <button type="submit">Create Itinerary</button>
      </form>
    );
  };
  
  export default ItineraryForm;