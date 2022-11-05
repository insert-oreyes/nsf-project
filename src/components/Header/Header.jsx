import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const headerData = ['Home', 'Programs', 'Why me?', 'Plans', 'Testimonials']

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt={''} />
      <ul className='header-menu'>
        {headerData.map((data) => {
          return <li>{data}</li>
        })}
      </ul>
    </div>
  )
}

export default Header
