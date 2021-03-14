import React, { ChangeEvent, useState } from 'react'
import { ActionsTypes, changeDialogTextAC, sendDialogMessageAC } from '../../../../redux/state'
// import styles from './DialogsMember.module.css'

type DialogsSenderType = {
  id: string
  dispatch: (action: ActionsTypes) => void
}

export const DialogsSender = (props: DialogsSenderType) => {
  const [value, setValue] = useState<string>('')
  
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newValue = e.currentTarget.value
    setValue(newValue)
    props.dispatch(changeDialogTextAC(newValue))
  }
  const sendMessage = () => {
    props.dispatch(sendDialogMessageAC(value,props.id))
    setValue('')
    props.dispatch(changeDialogTextAC(value))
  }
  
  return (
    <div>
      <textarea value={value} onChange={onChange}/>
      <div>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  )
}