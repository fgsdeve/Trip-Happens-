import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
