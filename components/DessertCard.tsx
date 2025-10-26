import React from 'react';
import { Dessert } from '@/types/dessert';

interface DessertCardProps {
  dessert: Dessert;
}

const DessertCard: React.FC<DessertCardProps> = ({ dessert }) => {
  // Clases dinámicas basadas en el colorTheme
  const borderColor = dessert.colorTheme === 'red' ? 'border-rojo-pasion' : 'border-verde-fresco';
  const priceColor = dessert.colorTheme === 'red' ? 'text-rojo-pasion' : 'text-verde-fresco';

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border-b-4 ${borderColor} transition duration-300 shadow-gris-texto shadow-2xl hover:shadow-xl`}>
      <img 
        src={dessert.imageUrl} 
        alt={dessert.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-rojo-letrac mb-2">{dessert.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{dessert.description}</p>
        <div className="flex justify-between items-center">
          <span className={`text-2xl font-extrabold ${priceColor}`}>
            ${dessert.price.toFixed(2)}
          </span>
          <button 
            className="bg-rojo-pasion text-white py-2 px-4 rounded-full font-semibold hover:bg-rojo-pasion/90 transition duration-300"
          >
            ¡Pedir Ahora!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DessertCard;