import React from 'react';
import { useParams } from 'react-router-dom';
import { kizartmalar } from '../data'; // Kızartma verilerini içe aktar

const KizartmaDetails = () => {
  const { name } = useParams();
  const kizartma = kizartmalar.find((k) => k.name === name);

  if (!kizartma) {
    return <div>Kızartma bulunamadı!</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl lg:text-2xl font-bold mt-4">
        {kizartma.kizartma}
      </h2>

      <div className="flex flex-col lg:flex-row mt-4">
        <div className="lg:order-2 lg:ml-4 mb-4 lg:mb-0">
          <img
            src={kizartma.image}
            alt={kizartma.kizartma}
            className="w-full sm:w-64 sm:h-64 object-cover rounded-lg"
          />
        </div>

        <div className="flex-1 lg:order-1">
          <h3 className="text-lg font-semibold mt-4">Malzemeler:</h3>
          <ul className="list-disc pl-5">
            {kizartma.malzemeler.map((malzeme, index) => (
              <li key={index}>{malzeme}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mt-4">Yapılış:</h3>
          <ol className="list-decimal pl-5">
            {kizartma.yapılış.map((adım, index) => (
              <li key={index}>{adım}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default KizartmaDetails;
