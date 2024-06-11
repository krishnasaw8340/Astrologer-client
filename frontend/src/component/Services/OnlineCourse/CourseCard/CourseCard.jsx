import React from 'react';

const CourseCard = ({ title, fee, duration, type, demo }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 m-4">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      {type && <p><strong>Type:</strong> {type}</p>}
      {demo && <p className="text-red-500">Three days Free Demo class</p>}
      <p><strong>Course Fee:</strong> {fee}</p>
      <p><strong>Duration:</strong> {duration}</p>
    </div>
  );
};

export default CourseCard;
