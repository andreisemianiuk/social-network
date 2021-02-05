import React from 'react'
import styles from './DialogsMessage.module.css'

type DialogsMessageType = {
  message: string
}

export const DialogsMessage: React.FC<DialogsMessageType> = (props) => {
  return (
    <div className={styles.container}>
      {props.message}
    </div>
  )
}