import { combineReducers, createStore } from 'redux'
import { changeDialogTextAC, dialogReducer, sendDialogMessageAC } from './reducers/dialog-reducer'
import { addPostAC, changePostTextAC, profileReducer } from './reducers/profile-reducer'
import { changeFriendAC, sendFriendAC, sidebarReducer } from './reducers/sidebar-reducer'

export type ActionTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof changePostTextAC>
  | ReturnType<typeof changeDialogTextAC>
  | ReturnType<typeof sendDialogMessageAC>
  | ReturnType<typeof changeFriendAC>
  | ReturnType<typeof sendFriendAC>

export const rootReducer = combineReducers({
  dialogsPage: dialogReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)