import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div>
        <img src='https://res.cloudinary.com/dighdsaim/image/upload/v1717261948/Astro/z2e0jgohowdiggfi2pbp.jpg' alt='logo' height="80" width="80"/>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Courses</Link>
      </div>
      <div>
        <button className='bg-yellow-400 text-white tet-2xl'>Get consultancy</button>
      </div>
    </nav>
  )
}

export default Header