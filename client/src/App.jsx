import React from 'react';
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
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
          <Route exact="true" path="/" component= {Home} />
          <Route path="/itinerary" component={Itinerary} />
          <Route path="/profile" component={Profile} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
