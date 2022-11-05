import React from 'react'
import './Footer.css'
import footInstagram from '../../assets/footInstagram.png'
import footLinkedin from '../../assets/footLinkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={footInstagram} alt='' />
          <img src={footLinkedin} alt='' />
        </div>
        <div className='footer-logo'>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className='blur blur-footer-1'></div>
      <div className='blur blur-footer-2'></div>
    </div>
  )
}

export default Footer
