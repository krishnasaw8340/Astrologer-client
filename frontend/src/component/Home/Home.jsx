import React from 'react';
import ShortAbout from './About/ShortAbout';
import ShortService from './Service/ShortService';
const Home = () => {
  return (
    <div>
      <section className="banner bg-cover bg-center h-96 flex items-center justify-center text-black text-4xl font-bold">
        Welcome to Jivanbodh Jyotish Sansthan.
      </section>
      <section className="p-8 bg-gray-100">
       <ShortAbout/>
      </section>
      <section className="p-8 bg-white">
        <ShortService/>
      </section>
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Section 3</h2>
        <p>This is the third section of the home page.</p>
      </section>
    </div>
  );
};

export default Home;
