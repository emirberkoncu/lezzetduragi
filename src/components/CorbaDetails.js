import React from 'react';
import { useParams } from 'react-router-dom';
import { corbalar } from '../data'; // Corbalar verisini içeren dosya

const CorbaDetails = () => {
  const { name } = useParams();
  const corba = corbalar.find((c) => c.name === name);

  if (!corba) {
    return <div>Çorba bulunamadı!</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl lg:text-2xl font-bold mt-4">{corba.corba}</h2>

      <div className="flex flex-col lg:flex-row mt-4">
        <div className="lg:order-2 lg:ml-4 mb-4 lg:mb-0">
          <img
            src={corba.image}
            alt={corba.corba}
            className="w-full sm:w-64 sm:h-64 object-cover rounded-lg"
          />
        </div>

        <div className="flex-1 lg:order-1">
          <h3 className="text-lg font-semibold mt-4">Malzemeler:</h3>
          <ul className="list-disc pl-5">
            {corba.malzemeler.map((malzeme, index) => (
              <li key={index}>{malzeme}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mt-4">Yapılış:</h3>
          <ol className="list-decimal pl-5">
            {corba.yapılış.map((adım, index) => (
              <li key={index}>{adım}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CorbaDetails;
