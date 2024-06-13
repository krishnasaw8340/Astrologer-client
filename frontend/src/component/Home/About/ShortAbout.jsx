import React from 'react'
import { Link } from 'react-router-dom'
const ShortAbout = () => {
    return (
        <div class="flex flex-col w-full text-center md:flex-row">
            <div class="md:w-1/3 mb-4 md:mb-0">
                <img src="https://res.cloudinary.com/dighdsaim/image/upload/v1717261948/Astro/z2e0jgohowdiggfi2pbp.jpg" alt="about" class="w-full h-auto"/>
            </div>
            <div class="md:w-2/3 md:ml-4">
                <h2 class="text-2xl font-bold mb-4 text-gray-700 text-center">About Praveer Hathyogi</h2>
                <p class="text-justify mb-4">Acharya Praveer Ji is a well-known astrologer, who is associated with the field of spirituality, who has been guiding the youth for a better future with his knowledge of astrology for the last 12 years. Acharya Praveer Ji is well versed in Vedic astrology, palmistry, numerology and Vastushastra. He has lived in solitude for many years and has done Dashamahavidya Sadhana, practiced Hatha Yoga and Mantra Sadhana, and his continuous sadhana continues in the same way even while living in the household ashram. Acharya Ji, while carrying forward the ancient Vedic astrologer tradition, also imparts knowledge of astrology to young men and women, teaches astrology to those interested in astrology through advanced Vedic astrology course. He has done a detailed study of all the Vedas, astrological texts and Upanishads. Acharya Ji has given accurate solution and guidance to the problems coming in the lives of people through astrology and his sadhana, he proved that astrology is not superstition but science. Acharya Ji in his career in astrology field has guided 10000+ people who were facing different types of problems in their life</p>
                <div class="text-left">
                    < Link to="/about">
                        <button class="bg-orange-600 py-2 px-4 rounded-md text-white focus:outline-none hover:bg-orange-700">Know more</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default ShortAbout