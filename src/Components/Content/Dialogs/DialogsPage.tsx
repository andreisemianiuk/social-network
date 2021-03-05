import React from 'react'
import styles from './DialogsPage.module.css'
import { DialogsMember } from './DialogsMember/DialogsMember'
import { DialogsMessage } from './DialogsMessage/DialogsMessage'
import { generateKey } from '../../../utilities/keyCreator'
import { DialogsType } from '../../../redux/state'

type DialogsPagePropsType = {
  dialogs: DialogsType[]
}

export const DialogsPage = (props: DialogsPagePropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.members}>
        {props.dialogs.map(v => (<DialogsMember key={generateKey(v.name)} name={v.name} id={v.id}/>))}
      </div>
      <div className={styles.dialogs}>
        {props.dialogs.map(v => (<DialogsMessage key={generateKey(v.name)} message={v.message}/>))}
      </div>
    </div>
  )
}