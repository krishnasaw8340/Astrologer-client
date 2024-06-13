import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            comment: 'This service has exceeded my expectations. The team is highly professional and efficient.',
            address: '1234 Elm Street, Springfield, IL',
            date: 'January 12, 2023'
        },
        {
            name: 'Jane Smith',
            comment: 'I am thoroughly impressed with the level of support provided. Highly recommend to everyone!',
            address: '5678 Oak Avenue, Riverside, CA',
            date: 'February 24, 2023'
        },
        {
            name: 'Michael Brown',
            comment: 'A fantastic experience from start to finish. Will definitely use their services again.',
            address: '910 Maple Lane, Boston, MA',
            date: 'March 18, 2023'
        },
        {
            name: 'Emily White',
            comment: 'Professional and reliable. They really care about their clients and it shows.',
            address: '1123 Pine Street, Seattle, WA',
            date: 'April 5, 2023'
        },
    ];

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        const autoSlide = setInterval(() => {
            slideRight();
        }, 3000);
        return () => clearInterval(autoSlide);
    }, []);

    return (
        <>
            <h2 className="text-2xl font-bold text-center mb-8">Satisfied Customers</h2>
            <div className="relative flex items-center w-11/12 h-80 mx-auto">
                <MdChevronLeft size={40} className="bg-white rounded-full absolute opacity-50 shadow-md cursor-pointer left-0 hover:opacity-100" onClick={slideLeft} />
                <div id="slider" className="w-full h-full whitespace-nowrap overflow-x-scroll scrollbar-hide scroll-smooth">
                    {
                        testimonials.map((testimonial, index) => {
                            return (
                                <div className="inline-block w-80 h-72 bg-white rounded-lg mx-2 shadow-md cursor-pointer" key={index}>
                                    <div className="p-4">
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="opacity-50 text-sm mb-2">{testimonial.date}</p>
                                        <p className="text-sm mb-2">{testimonial.comment}</p>
                                        <p className="text-xs text-gray-500">{testimonial.address}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <MdChevronRight size={40} className="bg-white rounded-full absolute opacity-50 shadow-md cursor-pointer right-0 hover:opacity-100" onClick={slideRight} />
            </div>
        </>
    )
}

export default Testimonials;
