import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { corbalar, kizartmalar, tatlilar, yemekler } from '../data'; // Verileri içe aktar
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term !== '') {
      const allFoods = [...corbalar, ...kizartmalar, ...tatlilar, ...yemekler];
      const results = allFoods.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.yemek?.toLowerCase().includes(term) ||
          item.corba?.toLowerCase().includes(term) ||
          item.kizartma?.toLowerCase().includes(term) ||
          item.tatli?.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (name, category) => {
    setSearchTerm('');
    setSearchResults([]);
    setIsMenuOpen(false);
    setIsSearchOpen(false);

    if (category === 'corba') {
      navigate(`/corba/${name}`);
    } else if (category === 'kizartma') {
      navigate(`/kizartma/${name}`);
    } else if (category === 'tatli') {
      navigate(`/tatli/${name}`);
    } else if (category === 'yemek') {
      navigate(`/food-details/${name}`);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          Yemek Tarifleri
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={toggleSearch} className="text-white mr-4">
            <Search size={24} />
          </button>
          <button onClick={toggleMenu} className="text-white">
            <Menu size={24} />
          </button>
        </div>

        <div className="hidden md:flex flex-grow justify-center mx-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Yemek ara..."
            className="p-2  w-full max-w-md rounded-lg"
          />
        </div>

        <ul className="hidden md:flex space-x-4">
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

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-blue-500 p-4 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white"
        >
          <X size={40} />
        </button>
        <div className="mt-12">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 block"
                onClick={closeMenu}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                to="/sulu-yemekler"
                className="text-white hover:text-gray-300 block"
                onClick={closeMenu}
              >
                Sulu Yemekler
              </Link>
            </li>
            <li>
              <Link
                to="/corbalar"
                className="text-white hover:text-gray-300 block"
                onClick={closeMenu}
              >
                Çorbalar
              </Link>
            </li>
            <li>
              <Link
                to="/tatlilar"
                className="text-white hover:text-gray-300 block"
                onClick={closeMenu}
              >
                Tatlılar
              </Link>
            </li>
            <li>
              <Link
                to="/kizartmalar"
                className="text-white hover:text-gray-300 block"
                onClick={closeMenu}
              >
                Kızartmalar
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Search */}
      <div
        ref={searchRef}
        className={`fixed top-0 left-0 w-full bg-white p-4 transform ${
          isSearchOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Yemek ara..."
          className="p-2 w-[100%] rounded-lg border border-gray-300"
        />
        <button
          onClick={toggleSearch}
          className="absolute top-[23px] right-6 text-red-600"
        >
          <X size={30} />
        </button>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && searchTerm !== '' && (
        <div className="absolute left-0 right-0 md:left-1/2 md:transform md:-translate-x-1/2 z-50 px-4 md:px-0">
          <ul className="bg-white xl:ml-[45px] xl:w-[450px] xl:mt-[0px] border border-gray-300 mt-2 w-full md:w-96 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleResultClick(result.name, result.category)}
              >
                {result.corba ||
                  result.kizartma ||
                  result.yemek ||
                  result.tatli}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
