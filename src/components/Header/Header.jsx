import React, { useState } from 'react'
import './Header.scss'
import ToggleTheme from '../UI/ToggleTheme/ToggleTheme'
import { IoMoon, IoSunny } from "react-icons/io5"
import BurgerMenu from '../UI/BurgerMenu/BurgerMenu'

export default function Header() {

  const [isActivemenu, setIsActiveMenu] = useState(false);

  function deActiveMenu() {
    setIsActiveMenu(isActivemenu => !isActivemenu)
  }

  return (
    <header className='header'>

      <h3 className="logo"><a href="#">satskiy.dev</a></h3>

      <div className="header-nav-row">
        <div className="switch-theme">
          <IoSunny />
          <ToggleTheme />
          <IoMoon />
        </div>
        <nav className={`nav ${isActivemenu ? 'active' : ''}`}>

          <ul>
            <li><a href="#">
              Home
            </a></li>
            <li><a href="#">
              Portfolio
            </a></li>
            <li><a href="#">
              About Me
            </a></li>
            <li><a href="#">
              Contact
            </a></li>
          </ul>
        </nav>
      </div>

      <BurgerMenu isActivemenu={isActivemenu} deActiveMenu={deActiveMenu} />

    </header>
  )
}
