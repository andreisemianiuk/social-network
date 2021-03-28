import React from 'react'
import styles from './Header.module.css'
import logo from '../../images/template/structure.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to='/profile'>
        <img className={styles.img} src={logo} alt='logo'/>
      </NavLink>
    </header>
  )
}