import React from 'react';
import ShortAbout from './About/ShortAbout';
import ShortService from './Service/ShortService';
import Banner from './Banner/Banner';
import WhyToChooseUs from './WhyUs/WhyToChooseUs';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <section className="banner bg-cover bg-center h-96 flex items-center justify-center text-black text-4xl font-bold">
        <Banner/>
      </section>
      <section className="p-8">
       <ShortAbout/>
      </section>
      <section className="p-8 ">
        <ShortService/>
      </section>
      <section className="p-8 bg-gray-100">
        {/* <h2 className="text-2xl font-bold mb-4">Section 3</h2>
        <p>This is the third section of the home page.</p> */}
        <WhyToChooseUs/>
      </section>
      <section className="p-8">
        <Testimonials/>

      </section>
    </div>
  );
};

export default Home;
