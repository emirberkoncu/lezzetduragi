import React from 'react';
import { Link } from 'react-router-dom';
import { corbalar } from '../data'; // corbalar verilerini içe aktar

const Corbalar = () => {
  return (
    <div className="flex flex-wrap justify-center p-4 bg-gray-100 min-h-screen">
      {corbalar.map((corba, index) => (
        <Link to={`/corba/${corba.name}`} key={index} className="m-4">
          <div className="bg-white border rounded-lg shadow-md p-4 w-72">
            <img
              src={corba.image} // Resim yolu (doğru dizinde olmasına dikkat edin)
              alt={corba.corba}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="font-bold text-xl mt-2 text-center">
              {corba.corba}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Corbalar;
