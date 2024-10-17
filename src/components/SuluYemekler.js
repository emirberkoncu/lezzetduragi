import React from 'react';
import { Link } from 'react-router-dom';
import { yemekler } from '../data';

const SuluYemekler = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {yemekler.map((yemek, index) => (
        <Link to={`/food-details/${yemek.name}`} key={index} className="m-4">
          <div className="bg-white border rounded-lg shadow-md p-4 w-72">
            <img
              src={yemek.image}
              alt={yemek.yemek}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="font-bold text-xl mt-2 text-center">
              {yemek.yemek}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SuluYemekler;
