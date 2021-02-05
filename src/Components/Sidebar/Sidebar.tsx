import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.link}>
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
      </div>
    </nav>
  )
}

export default Sidebar
