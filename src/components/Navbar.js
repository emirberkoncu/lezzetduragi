import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Lezzet Durağı</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/sulu-yemekler"
              className="text-white hover:text-gray-300"
            >
              Sulu Yemekler
            </Link>
          </li>
          <li>
            <Link to="/corbalar" className="text-white hover:text-gray-300">
              Çorbalar
            </Link>
          </li>
          <li>
            <Link to="/tatlilar" className="text-white hover:text-gray-300">
              Tatlılar
            </Link>
          </li>
          <li>
            <Link to="/kizartmalar" className="text-white hover:text-gray-300">
              Kızartmalar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
