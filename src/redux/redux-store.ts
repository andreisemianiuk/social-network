import { combineReducers, createStore } from 'redux'
import { changeDialogTextAC, dialogReducer, sendDialogMessageAC } from './reducers/dialog-reducer'
import { addPostAC, changePostTextAC, profileReducer } from './reducers/profile-reducer'
import { changeFriendAC, sendFriendAC, sidebarReducer } from './reducers/sidebar-reducer'
import { followAC, unfollowAC, usersReducer } from './reducers/users-reducer'

export type ActionTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof changePostTextAC>
  | ReturnType<typeof changeDialogTextAC>
  | ReturnType<typeof sendDialogMessageAC>
  | ReturnType<typeof changeFriendAC>
  | ReturnType<typeof sendFriendAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>

export const rootReducer = combineReducers({
  dialogsPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)