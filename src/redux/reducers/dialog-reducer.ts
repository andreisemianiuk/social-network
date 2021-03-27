import { v1 } from 'uuid'
import { ActionTypes } from '../redux-store'

export type DialogsType = {
  id: string
  name: string
  messages: string[]
}
export type DialogsPageType = {
  newDialogText: string
  dialogs: DialogsType[]
}

const SEND_DIALOG_MESSAGE = 'SEND_DIALOG_MESSAGE'
const CHANGE_DIALOG_TEXT = 'CHANGE_DIALOG_TEXT'

const initialState = {
  newDialogText: '',
  dialogs: [
    {
      id: v1(),
      name: 'Andrey',
      messages: ['hello', 'hey', 'bye'],
    },
    {
      id: v1(),
      name: 'Vika',
      messages: ['how are you?', 'ok'],
    },
    {
      id: v1(),
      name: 'Gosha',
      messages: ['what\'s up'],
    },
  ],
}

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
  switch (action.type) {
    case SEND_DIALOG_MESSAGE:
      return {
        ...state,
        dialogs: state.dialogs.map(d => d.id === action.id
          ? {...d, messages: [...d.messages, action.newText]}
          : d),
      }
    case CHANGE_DIALOG_TEXT:
      return {
        ...state,
        newDialogText: action.newText,
      }
    default:
      return state
  }
}

export const changeDialogTextAC = (text: string) => {
  return {
    type: CHANGE_DIALOG_TEXT,
    newText: text,
  } as const
}

export const sendDialogMessageAC = (text: string, id: string) => {
  return {
    type: SEND_DIALOG_MESSAGE,
    newText: text,
    id: id,
  } as const
}