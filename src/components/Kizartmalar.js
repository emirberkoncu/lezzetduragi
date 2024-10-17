import React from 'react';
import { Link } from 'react-router-dom';
import { kizartmalar } from '../data'; // Kızartma verilerini içe aktar

const Kizartmalar = () => {
  return (
    <div className="flex flex-wrap justify-center  ">
      {kizartmalar.map((kizartma, index) => (
        <Link to={`/kizartma/${kizartma.name}`} key={index} className="m-4">
          <div className="bg-white border rounded-lg shadow-md p-4 w-72">
            <img
              src={kizartma.image} // Resim yolu (doğru dizinde olmasına dikkat edin)
              alt={kizartma.kizartma}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="font-bold text-xl mt-2 text-center">
              {kizartma.kizartma}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Kizartmalar;
