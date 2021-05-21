import { RootStateType } from '../redux-store'
import { DialogsType } from '../reducers/dialog-reducer'

export const getDialogs = (state: RootStateType): DialogsType[] => {
  return state.dialogsPage.dialogs
}