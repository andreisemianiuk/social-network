import { applyMiddleware, combineReducers, createStore } from 'redux'
import { dialogReducer } from './reducers/dialog-reducer'
import { profileReducer } from './reducers/profile-reducer'
import { sidebarReducer } from './reducers/sidebar-reducer'
import { usersReducer } from './reducers/users-reducer'
import { authReducer } from './reducers/auth-reducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


export const rootReducer = combineReducers({
  dialogsPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store