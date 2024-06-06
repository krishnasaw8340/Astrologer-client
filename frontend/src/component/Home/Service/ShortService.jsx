import React from 'react'
import Card from './Card/Card.jsx'
const ShortService = () => {
    const Services = [
        {
            icon: '',
            title: 'Kundali',
            info: `This detailed report utilizes astrological analysis to provide insights into your future prospects, helping you make informed decisions and navigate life's challenges with confidence.`,
            img: 'https://res.cloudinary.com/dighdsaim/image/upload/v1717698111/Services/rpry8tfilx6m3ixm08aw.jpg',
        },
        {
            icon: '',
            title: 'Gharelu Vivad',
            info: ` Resolve home matters (Gharelu Vivad) with astrological guidance. Seek remedies and advice to harmonize domestic issues and create a peaceful home environment.`,
            img: 'https://res.cloudinary.com/dighdsaim/image/upload/v1717698120/Services/hoyviqaqng1odzkfcrd9.jpg',
        },
        {
            icon: '',
            title: 'Black Magic Solution',
            info:  `Seek solutions for Black Magic problems. Get expert guidance and remedies to protect yourself and your loved ones from negative energies and restore peace in your life.`,
            img:'https://res.cloudinary.com/dighdsaim/image/upload/v1717698136/Services/sihvmvylbkzew0hk3s9r.jpg',
        },
       
       
        {
            icon: '',
            title: 'Book Consultation Call',
            info: `Book a consultation call with our expert astrologers. Gain personalized insights and guidance on Career, Business, Money, Health, Love, and Marriage.`,
              img: 'https://res.cloudinary.com/dighdsaim/image/upload/v1717698184/Services/e7pfczvoqgmq3w5rmvpb.jpg'
           
        },
        {
            icon: '',
            title: 'Couple Matching Kundli',
            info: `Get a Couple Matching Kundli (Milan) Report based on the birth date and time of the male and female partners. This report provides insights into compatibility factors based on astrological principles, helping couples understand their strengths and areas of harmony.`,
             img: 'https://res.cloudinary.com/dighdsaim/image/upload/v1717698177/Services/ri1qq0ayi9ayrymijrw5.jpg'
           
        },
        {
            icon: '',
            title: 'Products',
            info: `Explore our diverse collection of astrological guidance gemstones. Find the perfect gemstone to enhance your astrological influences and achieve balance and positivity in your life.`,
            img: 'https://res.cloudinary.com/dighdsaim/image/upload/v1717698166/Services/ekvrxmaqqczahmatqvhs.jpg'
        },
        {
            icon: '',
            title: 'Online Course',
            info: `Enroll in our Live Online comprehensive Astrology, Numerology & Vastu Shastra courses. Learn directly from experts to deepen your understanding and master these ancient sciences.`,
             img: 'https://res.cloudinary.com/dighdsaim/image/upload/v1717698155/Services/q4n2jsnmswu4bntdtjih.jpg'
           
        },
        {
            icon: '',
            title: 'Pooja',
            info: `Perform specific online poojas such as Nav Grah Saanti Pooja, Sani Shanti Pooja, Pitra Dosh, Kaal Sarp Dosh, and more. Seek spiritual remedies and blessings to mitigate planetary influences and bring peace and harmony into your life.`,
             img: 'https://res.cloudinary.com/dighdsaim/image/upload/v1717698146/Services/x15cbw0wfvilr5cirjc8.jpg'
          
        },
    ]
  return (
    <div>
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-800 ">Services We Offer</h2>
         <div className="min-h-screen bg-gray-100 flex flex-col ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Services.map((card, index) => (
          <Card key={index} title={card.title} info={card.info} img={card.img} />
        ))}
      </div>
    </div>

    </div>
   
  )
}

export default ShortService