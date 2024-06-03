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
                <p class="text-justify mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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