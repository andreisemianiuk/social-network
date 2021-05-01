import React from 'react'
import styles from './DialogsPage.module.css'
import { DialogsMember } from './DialogsMember/DialogsMember'
import { DialogsPagePropsType } from './DialogsMember/DialogsContainer'
import { Redirect } from 'react-router-dom'


export const DialogsPage = ({dialogs, onChange, sendMessage, isAuth}: DialogsPagePropsType) => {
  if (!isAuth) return <Redirect to={'login'}/>
  return (
    <div className={styles.container}>
      <div className={styles.members}>
        {dialogs.map(v =>
          (<DialogsMember
            key={v.id}
            name={v.name}
            id={v.id}
            messages={v.messages}
            onChange={onChange}
            sendMessage={sendMessage}
          />))
        }
      </div>
    </div>
  )
}
