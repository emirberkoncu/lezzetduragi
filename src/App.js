import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SuluYemekler from './components/SuluYemekler';
import FoodDetails from './components/FoodDetails';
import Corbalar from './components/Corbalar';
import CorbaDetails from './components/CorbaDetails';
import Tatlilar from './components/Tatlilar';
import TatliDetails from './components/TatliDetails';
import Kizartmalar from './components/Kizartmalar';
import KizartmaDetails from './components/KizartmaDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sulu-yemekler" element={<SuluYemekler />} />
        <Route path="/corbalar" element={<Corbalar />} />
        <Route path="/corba/:name" element={<CorbaDetails />} />
        <Route path="/tatlilar" element={<Tatlilar />} />
        <Route path="/tatli/:name" element={<TatliDetails />} />
        <Route path="/kizartmalar" element={<Kizartmalar />} />
        <Route path="/kizartma/:name" element={<KizartmaDetails />} />
        <Route path="/food-details/:name" element={<FoodDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
