import { v1 } from 'uuid'
import { addPostAC, changePostTextAC, profileReducer } from './reducers/profile-reducer'
import { changeDialogTextAC,  dialogReducer, sendDialogMessageAC } from './reducers/dialog-reducer'

export type DialogsType = {
  id: string
  name: string
  messages: string[]
}

export type DialogsPageType = {
  newDialogText: string
  dialogs: DialogsType[]
}

export type ProfilePageType = {
  newPostText: string
  posts: PostType[]
}

export type PostType = {
  id: string
  name: string
  message: string
  likes: number
  dislikes: number
}

export type StateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
  sidebar: string[]
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC>
  | ReturnType<typeof changeDialogTextAC> | ReturnType<typeof sendDialogMessageAC>

export type StoreType = {
  _state: StateType
  _getState: () => StateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionTypes) => void
}

export const ADD_POST = 'ADD_POST'
export const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'

export const SEND_DIALOG_MESSAGE = 'SEND_DIALOG_MESSAGE'
export const CHANGE_DIALOG_TEXT = 'CHANGE_DIALOG_TEXT'


let store: StoreType = {
  _state: {
    dialogsPage: {
      newDialogText: '',
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
    ,
    profilePage: {
      newPostText: '',
      posts: [
        {id: v1(), name: 'Andrey', message: 'hello', likes: 20, dislikes: 10},
        {id: v1(), name: 'Vera', message: 'hello1', likes: 10, dislikes: 12},
        {id: v1(), name: 'Lesha', message: 'hello2', likes: 20, dislikes: 20},
      ],
    },
    sidebar: ['Sveta', 'Kolya', 'Vasya'],
  },
  _getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('state had changed')
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
    this._callSubscriber()
  },
}

export default store