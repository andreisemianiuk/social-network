import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DialogsMember.module.css'
import { generateKey } from '../../../../utilities/keyCreator'
import { DialogsSender } from './DialogsSender'

type DialogsMemberType = {
  id: string
  name: string
  messages: string[]
  onChange: (value: string) => void
  sendMessage: (value: string, id: string) => void
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
      
      {!collapsed &&
      <div>
        {props.messages.map(m => <div key={generateKey(m)}>{m}</div>)}
        <DialogsSender
          id={props.id}
          onChange={props.onChange}
          sendMessage={props.sendMessage}
        />
      </div>
      }
    </div>
  )
}