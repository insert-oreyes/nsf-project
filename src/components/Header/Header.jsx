import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const headerData = ['home', 'programs', 'why me', 'plans', 'testimonials']

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpen, setMenuOpen] = useState(false)
  const handleClickTrue = () => {
    setMenuOpen(true)
  }
  const handleClickFalse = () => {
    setMenuOpen(false)
  }

  return (
    <div className='header'>
      <img className='logo' src={logo} alt='' />
      {mobile === true && menuOpen === false ? (
        <div className='menu-container' onClick={handleClickTrue}>
          <img className='menu' src={bars} alt='' srcset='' />
        </div>
      ) : (
        <ul className='header-menu'>
          {headerData.map((data) => {
            return (
              <li key={data}>
                <Link
                  onClick={handleClickFalse}
                  to={data}
                  span={true}
                  smooth={true}
                >
                  {data}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Header
