import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DialogsMember.module.css'

type DialogsMemberType = {
  name: string
  id: number
}

export const DialogsMember: React.FC<DialogsMemberType> = (props) => {
  return (
    <div className={styles.container}>
      <NavLink activeClassName={styles.active} to={`/dialogs/${props.id}`}>
        {props.name}
      </NavLink>
    </div>
  )
}