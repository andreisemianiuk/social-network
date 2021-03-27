import React from 'react'
import styles from './Header.module.css'
import { Pogonya } from '../../images/template/pogonya'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to='/profile'>
        <img className={styles.img} src={Pogonya} alt='pogonya'/>
      </NavLink>
      <div className={styles.logo}>my social network</div>
    </header>
  )
}