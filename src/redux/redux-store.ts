import { applyMiddleware, combineReducers, createStore } from 'redux'
import { dialogReducer, DialogsActionTypes } from './reducers/dialog-reducer'
import { ProfileActionTypes, profileReducer } from './reducers/profile-reducer'
import { SidebarActionTypes, sidebarReducer } from './reducers/sidebar-reducer'
import { UsersActionTypes, usersReducer } from './reducers/users-reducer'
import { AuthActionTypes, authReducer } from './reducers/auth-reducer'
import thunk, { ThunkAction } from 'redux-thunk'
import { AppActionTypes, appReducer } from './reducers/app-reducer'


export const rootReducer = combineReducers({
  dialogsPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  app: appReducer
  // form: formReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootActionsType =
  | UsersActionTypes
  | SidebarActionTypes
  | ProfileActionTypes
  | DialogsActionTypes
  | AuthActionTypes
  | AppActionTypes

export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>

// @ts-ignore
window.store = store