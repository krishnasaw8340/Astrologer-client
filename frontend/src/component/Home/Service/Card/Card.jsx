// src/components/Card.js

import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, info, img }) => {
  const slug = title.toLowerCase().replace(/ /g, '-');

  return (
    <Link to={`/services/${slug}`} className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 bg-gradient-to-r from-gray-600 to-orange-300 text-white m-4">
      <img className="w-full h-40 object-cover" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{title}</div>
      </div>
    </Link>
  );
};

export default Card;
