// ServiceDetails.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ServiceDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const title = location.state?.title

  console.log('Slug from URL:', slug); // Log the slug parameter
  console.log('Title from state:', title); // Log the title parameter

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <p>Rthisdvkd, ,dgn,dnvndm</p>
    </div>
  );
};

export default ServiceDetails;
