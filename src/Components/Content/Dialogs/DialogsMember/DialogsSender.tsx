import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'
import { generateKey } from '../../../../utilities/keyCreator'
import { DialogDataType, DialogReduxForm } from './DialogsForm'

type DialogsSenderType = {
  id: string
  name: string
  messages: string[]
  sendMessage: (value: string, id: string) => void
}

export const DialogsSender: React.FC<DialogsSenderType> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  
  const callback = () => {
    setCollapsed(!collapsed)
  }
  const addMessage = (values: DialogDataType) => {
    props.sendMessage(values.dialog, props.id)
  }
  
  return (
    <div className={styles.container}>
      <NavLink activeClassName={styles.active} onClick={callback} to={`/dialogs/${props.id}`}>
        <div>{props.name}</div>
      </NavLink>
      
      {!collapsed &&
      <div>
        {props.messages.map(m => <div key={generateKey(m)}>{m}</div>)}
        <DialogReduxForm onSubmit={addMessage}/>
      </div>
      }
    </div>
  )
}