import { ActionTypes, CHANGE_DIALOG_TEXT, DialogsPageType, SEND_DIALOG_MESSAGE } from '../store'
import { v1 } from 'uuid'

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

export const dialogReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
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