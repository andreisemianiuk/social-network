import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.link}>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to='/dialogs'>Dialogs</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to='/posts'>Posts</NavLink>
      </div>
      <div className={s.link}>
        <NavLink to='/friends'>Friends</NavLink>
      </div>
    </nav>
  )
}

export default Sidebar
