import React from 'react'
import { changeDialogTextAC, sendDialogMessageAC } from '../../../../redux/reducers/dialog-reducer'
import { StoreType } from '../../../../App'
import { DialogsSender } from './DialogsSender'

type DialogsSenderType = {
  id: string
  store: StoreType
}

export const DialogsContainerSender = ({id,store}: DialogsSenderType) => {
  const onChangeHandler = (value: string) => {
    store.dispatch(changeDialogTextAC(value))
  }
  const sendMessageHandler = (value: string, id: string) => {
    store.dispatch(sendDialogMessageAC(value,id))
    store.dispatch(changeDialogTextAC(value))
  }
  
  return <DialogsSender id={id} onChange={onChangeHandler} sendMessage={sendMessageHandler}/>
}