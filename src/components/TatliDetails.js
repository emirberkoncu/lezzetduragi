import React from 'react';
import { useParams } from 'react-router-dom';
import { tatlilar } from '../data'; // Tatlılar verisini içe aktar

const TatliDetails = () => {
  const { name } = useParams();
  const tatli = tatlilar.find((t) => t.name === name);

  if (!tatli) {
    return <div>Tatlı bulunamadı!</div>;
  }

  return (
    <div className="flex max-w-2xl mx-auto p-4">
      <div className="flex-1 pr-4">
        <h2 className="text-2xl font-bold mt-4">{tatli.tatli}</h2>
        <h3 className="text-lg font-semibold mt-4">Malzemeler:</h3>
        <ul className="list-disc pl-5">
          {tatli.malzemeler.map((malzeme, index) => (
            <li key={index}>{malzeme}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mt-4">Yapılış:</h3>
        <ol className="list-decimal pl-5">
          {tatli.yapılış.map((adım, index) => (
            <li key={index}>{adım}</li>
          ))}
        </ol>
      </div>
      <div className="flex-none">
        <img
          src={tatli.image}
          alt={tatli.tatli}
          className="w-64 h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default TatliDetails;
