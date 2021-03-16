import { ActionTypes, CHANGE_DIALOG_TEXT, DialogsPageType, SEND_DIALOG_MESSAGE } from '../store'

export const dialogReducer = (state: DialogsPageType, action: ActionTypes) => {
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