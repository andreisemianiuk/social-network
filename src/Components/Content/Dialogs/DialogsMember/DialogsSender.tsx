import React, { ChangeEvent, useState } from 'react'
import styles from './DialogsMember.module.css'

type DialogsSenderType = {
  id: string
  onChange: (value: string) => void
  sendMessage: (value: string, id: string) => void
}

export const DialogsSender = (props: DialogsSenderType) => {
  const [value, setValue] = useState<string>('')
  
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newValue = e.currentTarget.value//?
    setValue(newValue)//
    props.onChange(newValue)
  }
  const sendMessage = () => {
    props.sendMessage(value,props.id)
    setValue('')
    props.onChange(value)
  }
  
  return (
    <div>
      <textarea value={value} onChange={onChange}/>
      <div>
        <button className={styles.sendMessageBtn} onClick={sendMessage}>Send message</button>
      </div>
    </div>
  )
}