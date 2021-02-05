import React from 'react'
import styles from './Header.module.css'
import { Pogonya } from '../../images/template/pogonya'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to='/profile'>
        <img className={styles.img} src={Pogonya} alt='pogonya'/>
      </NavLink>
      <div className={styles.logo}>This is my Social Network</div>
    </header>
  )
}

export default Header