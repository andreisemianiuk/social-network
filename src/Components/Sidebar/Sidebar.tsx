import React from 'react'
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { generateKey } from '../../utilities/keyCreator'
import { Avatar } from '../../images/template/avatar'

type SidebarType = {
  friends: string[]
}

const Sidebar = (props: SidebarType) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.link}>
        <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to='/dialogs' activeClassName={styles.active}>Dialogs</NavLink>
      </div>
      <div className={`${styles.link} ${styles.friends}`}>
        <NavLink to='/friends' activeClassName={styles.active}>Friends</NavLink>
      </div>
      <div className={styles.friendsWrapper}>
        {props.friends.map(v => (<div className={styles.friend} key={generateKey(v)}>
          <img className={styles.img} src={Avatar} alt='ava'/>
          <div className={styles.name}>{v}</div>
        </div>))}
      </div>
    </nav>
  )
}

export default Sidebar
