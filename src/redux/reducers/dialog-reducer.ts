import { ActionTypes, CHANGE_DIALOG_TEXT, DialogsPageType, SEND_DIALOG_MESSAGE } from '../store'

export const dialogReducer = (state: DialogsPageType, action: ActionTypes) => {
  switch (action.type) {
    case SEND_DIALOG_MESSAGE:
      const friend = state.dialogs.find(i => i.id === action.id)
      if (friend) {
        friend.messages.push(action.newText)
      }
      return state
    case CHANGE_DIALOG_TEXT:
      return {
        ...state,
        newDialogText: action.newText
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