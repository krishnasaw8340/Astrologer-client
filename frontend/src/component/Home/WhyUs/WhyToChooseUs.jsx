import React from 'react';

const WhyToChooseUs = () => {
    const whychooseus = [
        {
            icon: 'https://res.cloudinary.com/dighdsaim/image/upload/v1718128552/oskcn55bj44r10slnlo3.svg',
            title: '10+ years of exp.',
            info: 'Having more than 10 years of experience serving many clients across India.'
        },
        {
            icon: 'https://res.cloudinary.com/dighdsaim/image/upload/v1718129180/w1wlc5x50kfxtkwbpaqf.svg',
            title: '5000+ Clients served.',
            info: 'We have served over 5000 clients across India.'
        },
        {
            icon: 'https://res.cloudinary.com/dighdsaim/image/upload/v1718129718/mgq396i2kyuzshtayl8d.svg',
            title: '99.9% Prediction Accuracy',
            info: 'We boast a 99.9% accuracy in our predictions.'
        },
        {
            icon: 'https://res.cloudinary.com/dighdsaim/image/upload/v1718129783/wqj1negacz2wky7wli3y.svg',
            title: '100% Data Protection and Privacy',
            info: 'We ensure 100% data protection and privacy for all our clients.'
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-8">Why Our Clients Love Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whychooseus.map((item, index) => (
                    <div key={index} className="flex items-center p-6 bg-white shadow-lg rounded-lg">
                        <img src={item.icon} alt={item.title} className="w-16 h-16 mr-6" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-orange-600">{item.title}</h3>
                            <p className="text-gray-600">{item.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyToChooseUs;
