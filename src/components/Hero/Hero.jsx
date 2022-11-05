import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
      {/* --> left side of the page */}
      <div className='blur hero-blur'></div>
      <div className='hero-left'>
        <Header />

        {/* the best add */}
        <div className='the-best-add'>
          <motion.div></motion.div>
          <span>The best natural physique's coach</span>
        </div>

        {/* hero heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Fiber </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body.</span>
          </div>
          <div className='description-text'>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              repellat recusandae sed rem, eligendi sint aliquam voluptas
              tenetur.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className='hero-figures'>
          <div>
            <span>+ 140</span>
            <span>Sport coach</span>
          </div>
          <div>
            <span>+ 999</span>
            <span>Lorem lorem</span>
          </div>
          <div>
            <span>+ 333</span>
            <span>Lorem Lorem</span>
          </div>
        </div>

        {/* buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn more</button>
        </div>
      </div>

      {/* --> right side of the page */}

      <div className='hero-right'>
        {/* buttons */}
        <button className='btn'>Join Now</button>

        <div className='heart-rate'>
          <img src={heart} alt='' />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero main img */}

        <img className='hero-image' src={hero_image} alt='' />
        <img className='hero-image-back' src={hero_image_back} alt='' />

        {/* customers */}
        <div className='calories'>
          <img src={calories} alt='' />
          <div>
            <span>+ 200</span>
            <span>Customers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
