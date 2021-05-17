import { v1 } from 'uuid'

const SEND_DIALOG_MESSAGE = 'SEND_DIALOG_MESSAGE'

export type DialogsActionTypes = ReturnType<typeof sendDialogMessageAC>

export type DialogsType = {
  id: string
  name: string
  messages: string[]
}
export type DialogsPageType = {
  dialogs: DialogsType[]
}

const initialState = {
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

export const dialogReducer = (state: DialogsPageType = initialState, action: DialogsActionTypes): DialogsPageType => {
  switch (action.type) {
    case SEND_DIALOG_MESSAGE:
      return {
        ...state,
        dialogs: state.dialogs.map(d => d.id === action.id
          ? {...d, messages: [...d.messages, action.newText]}
          : d),
      }
    default:
      return state
  }
}

export const sendDialogMessageAC = (text: string, id: string) => {
  return {
    type: SEND_DIALOG_MESSAGE,
    newText: text,
    id: id,
  } as const
}