import { combineReducers, createStore } from 'redux'
import { dialogReducer } from './reducers/dialog-reducer'
import { profileReducer } from './reducers/profile-reducer'
import { sidebarReducer } from './reducers/sidebar-reducer'

let reducers = combineReducers({
  dialogsPage: dialogReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
})

let store = createStore(reducers)

export default store