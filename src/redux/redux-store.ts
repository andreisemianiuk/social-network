import { combineReducers, createStore } from 'redux'
import { changeDialogTextAC, dialogReducer, sendDialogMessageAC } from './reducers/dialog-reducer'
import { profileReducer } from './reducers/profile-reducer'
import { changeFriendAC, sendFriendAC, sidebarReducer } from './reducers/sidebar-reducer'
import { usersReducer } from './reducers/users-reducer'
import { authReducer } from './reducers/auth-reducer'

export type ActionTypes =
  | ReturnType<typeof changeDialogTextAC>
  | ReturnType<typeof sendDialogMessageAC>
  | ReturnType<typeof changeFriendAC>
  | ReturnType<typeof sendFriendAC>

export const rootReducer = combineReducers({
  dialogsPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store