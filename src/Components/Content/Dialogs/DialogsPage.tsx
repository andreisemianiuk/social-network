import React, { useState } from 'react'
import styles from './DialogsPage.module.css'
import { DialogsMember } from './DialogsMember/DialogsMember'
import { DialogsType } from '../../../redux/state'

type DialogsPagePropsType = {
  dialogs: DialogsType[]
}

export const DialogsPage = (props: DialogsPagePropsType) => {
  const [value, setValue] = useState<string>('')
  
  // const sendMessage = (id: string) => {
  //   props.sendMessage(id)
  // }
  
  return (
    <div className={styles.container}>
      <div className={styles.members}>
        {props.dialogs.map(v => (<DialogsMember key={v.id} name={v.name} id={v.id} messages={v.messages}/>))}
      </div>
      <div>
        <textarea value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
        <div>
          <button onClick={() => (alert('send message'))}>Send message</button>
        </div>
      </div>
    </div>
  )
}