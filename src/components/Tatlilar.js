import React from 'react';
import { Link } from 'react-router-dom';
import { tatlilar } from '../data'; // Tatlılar verilerini içe aktar

const Tatlilar = () => {
  return (
    <div className="flex flex-wrap justify-center   ">
      {tatlilar.map((tatli, index) => (
        <Link to={`/tatli/${tatli.name}`} key={index} className="m-4">
          <div className="bg-white border rounded-lg shadow-md p-4 w-72">
            <img
              src={tatli.image} // Resim yolu (doğru dizinde olmasına dikkat edin)
              alt={tatli.tatli}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="font-bold text-xl mt-2 text-center">
              {tatli.tatli}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tatlilar;
