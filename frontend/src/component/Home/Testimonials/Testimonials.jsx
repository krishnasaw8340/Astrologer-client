import React, { useState, useEffect } from 'react';

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const previousTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 relative">
            <h2 className="text-2xl font-bold text-center mb-8">Satisfied Customers</h2>
            <div className="flex justify-center items-center">
                <button
                    onClick={previousTestimonial}
                    className="absolute left-0 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                >
                    &lt;
                </button>
                <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
                    <p className="text-gray-600 mb-4">"{testimonials[currentIndex].comment}"</p>
                    <div className="text-right">
                        <p className="text-xl font-semibold">{testimonials[currentIndex].name}</p>
                        <p className="text-gray-500">{testimonials[currentIndex].address}</p>
                        <p className="text-gray-400 text-sm">{testimonials[currentIndex].date}</p>
                    </div>
                </div>
                <button
                    onClick={nextTestimonial}
                    className="absolute right-0 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
