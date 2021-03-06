import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DialogsMember.module.css'

type DialogsMemberType = {
  id: string
  name: string
  messages: string[]
}

export const DialogsMember: React.FC<DialogsMemberType> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const callback = () => {
    setCollapsed(!collapsed)
  }
  
  return (
    <div className={styles.container}>
      <NavLink activeClassName={styles.active} onClick={callback} to={`/dialogs/${props.id}`}>
        <div>{props.name}</div>
      </NavLink>
      {!collapsed && <div>{props.messages.map(m => <div>{m}</div>)}</div>}
    </div>
  )
}