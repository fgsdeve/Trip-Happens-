import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path ="/" element= {<Home />} />
          <Route path="/itinerary" element= {<Itinerary />} />
          <Route path="/profile" element= {<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
