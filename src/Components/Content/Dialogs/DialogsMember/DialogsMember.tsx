import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DialogsMember.module.css'
import { StoreType } from '../../../../App'
import { DialogsContainerSender } from './DialogsContainerSender'

type DialogsMemberType = {
  id: string
  name: string
  messages: string[]
  store: StoreType
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
          {props.messages.map(m => <div>{m}</div>)}
          <DialogsContainerSender id={props.id} store={props.store}/>
        </div>
      }
    </div>
  )
}