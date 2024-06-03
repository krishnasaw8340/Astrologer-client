// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="banner bg-cover bg-center h-96 flex items-center justify-center text-black text-4xl font-bold">
        Welcome to Jivanbodh Jyotish Sansthan.
      </section>
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Section 1</h2>
        <p>This is the first section of the home page.</p>
      </section>
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Section 2</h2>
        <p>This is the second section of the home page.</p>
      </section>
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Section 3</h2>
        <p>This is the third section of the home page.</p>
      </section>
    </div>
  );
};

export default Home;
