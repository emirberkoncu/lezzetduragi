import React from 'react';
import { useParams } from 'react-router-dom';
import { yemekler } from '../data';

const FoodDetails = () => {
  const { name } = useParams();
  const yemek = yemekler.find((y) => y.name === name);

  if (!yemek) {
    return <div>Yemek bulunamadı!</div>;
  }

  return (
    <div className="flex max-w-2xl mx-auto p-4">
      <div className="flex-1 pr-4">
        <h2 className="text-2xl font-bold mt-4">{yemek.yemek}</h2>
        <h3 className="text-lg font-semibold mt-4">Malzemeler:</h3>
        <ul className="list-disc pl-5">
          {yemek.malzemeler.map((malzeme, index) => (
            <li key={index}>{malzeme}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mt-4">Yapılış:</h3>
        <ol className="list-decimal pl-5">
          {yemek.yapılış.map((adım, index) => (
            <li key={index}>{adım}</li>
          ))}
        </ol>
      </div>
      <div className="flex-none">
        <img
          src={yemek.image}
          alt={yemek.yemek}
          className="w-64 h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default FoodDetails;
