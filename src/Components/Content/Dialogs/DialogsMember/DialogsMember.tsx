import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DialogsMember.module.css'
import { DialogsSender } from './DialogsSender'
import { ActionTypes } from '../../../../redux/state'

type DialogsMemberType = {
  id: string
  name: string
  messages: string[]
  dispatch: (action: ActionTypes) => void
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
          <DialogsSender id={props.id} dispatch={props.dispatch}/>
        </div>
      }
    </div>
  )
}