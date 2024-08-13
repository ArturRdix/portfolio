import React from 'react'
import './BurgerMenu.css'

export default function BurgerMenu({ isActivemenu, deActiveMenu }) {

  return (
    <div
      onClick={deActiveMenu}
      className={`burger-menu ${isActivemenu ? 'active' : ''}`} >
      <span className={`middle-line ${isActivemenu ? 'active' : ''}`}></span>
    </div>
  )
}
