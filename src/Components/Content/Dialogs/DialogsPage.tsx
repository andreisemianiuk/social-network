import React from 'react'
import styles from './DialogsPage.module.css'
import { DialogsMember } from './DialogsMember/DialogsMember'
import { DialogsMessage } from './DialogsMessage/DialogsMessage'


export const DialogsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.members}>
        <DialogsMember name={'Andrey'} id={1}/>
        <DialogsMember name={'Vika'} id={2}/>
        <DialogsMember name={'Gosha'} id={3}/>
        <DialogsMember name={'Lera'} id={4}/>
        <DialogsMember name={'Sveta'} id={5}/>
      </div>
      <div className={styles.dialogs}>
        <DialogsMessage message={'hello'}/>
        <DialogsMessage message={'hoe are you?'}/>
        <DialogsMessage message={'what\'s up'}/>
        <DialogsMessage message={'how old are you?'}/>
        <DialogsMessage message={'do you like coffee?'}/>
        <DialogsMessage message={'are you funny?'}/>
      </div>
    </div>
  )
}