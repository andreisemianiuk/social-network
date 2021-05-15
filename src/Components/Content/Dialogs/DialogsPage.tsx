import React from 'react'
import styles from './DialogsPage.module.css'
import { DialogsSender } from './DialogsMember/DialogsSender'
import { DialogsPagePropsType } from './DialogsMember/DialogsContainer'

export const DialogsPage = ({dialogs, sendMessage}: DialogsPagePropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.members}>
        {dialogs.map(v =>
          (<DialogsSender
            key={v.id}
            name={v.name}
            id={v.id}
            messages={v.messages}
            sendMessage={sendMessage}
          />))
        }
      </div>
    </div>
  )
}
