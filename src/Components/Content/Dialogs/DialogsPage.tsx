import React from 'react'
import styles from './DialogsPage.module.css'
import { DialogsMember } from './DialogsMember/DialogsMember'
import { DialogsType } from '../../../redux/store'
import { AppPropsType } from '../../../App'

export const DialogsPage = (props: AppPropsType) => {
  const dialogs: DialogsType[] = props.store.getState().dialogsPage.dialogs
  return (
    <div className={styles.container}>
      <div className={styles.members}>
        {dialogs.map(v =>
          (<DialogsMember
            key={v.id}
            name={v.name}
            id={v.id}
            messages={v.messages}
            store={props.store}
          />))
        }
      </div>
    </div>
  )
}