import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function SuluYemekler() {
  return <h2 className="text-center mt-4">Sulu Yemekler Sayfası</h2>;
}

function Corbalar() {
  return <h2 className="text-center mt-4">Çorbalar Sayfası</h2>;
}

function Tatlilar() {
  return <h2 className="text-center mt-4">Tatlılar Sayfası</h2>;
}

function Kizartmalar() {
  return <h2 className="text-center mt-4">Kızartmalar Sayfası</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sulu-yemekler" element={<SuluYemekler />} />
        <Route path="/corbalar" element={<Corbalar />} />
        <Route path="/tatlilar" element={<Tatlilar />} />
        <Route path="/kizartmalar" element={<Kizartmalar />} />
      </Routes>
    </Router>
  );
}

export default App;
