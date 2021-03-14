import React, { useState } from 'react'
import styles from './DialogsPage.module.css'
import { DialogsMember } from './DialogsMember/DialogsMember'
import { ActionsTypes, DialogsType } from '../../../redux/state'

type DialogsPagePropsType = {
  dialogs: DialogsType[]
  dispatch: (action: ActionsTypes) => void
}

export const DialogsPage = (props: DialogsPagePropsType) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.members}>
        {props.dialogs.map(v => (<DialogsMember key={v.id}
                                                name={v.name}
                                                id={v.id}
                                                messages={v.messages}
                                                dispatch={props.dispatch}/>))
        }
      </div>
    </div>
  )
}