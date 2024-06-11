// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, info, img, link }) => {
  const slug = title.toLowerCase().replace(/ /g, '-');

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 bg-gradient-to-r from-gray-600 to-orange-300 text-white m-4">
      <img className="w-full h-40 object-cover border space-x-3" src={img} alt={title} />
      <div className="flex flex-row px-6 py-4 justify-between items-center ">
        <div className="font-bold text-lg mb-2">{title}</div>
        <Link to={link}>
          <button className='py-2 px-1 border rounded-md text-white bg-orange-600 hover:bg-orange-700 font-medium'>Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
