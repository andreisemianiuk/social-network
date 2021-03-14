import { v1 } from 'uuid'

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

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC>
                            | ReturnType<typeof changeDialogTextAC> | ReturnType<typeof sendDialogMessageAC>

export type StoreType = {
  _state: StateType
  _getState: () => StateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
  _state: {
  dialogsPage: {
    newDialogText: '',
    dialogs: [
      {
        id: v1(),
        name: 'Andrey',
        messages: ['hello', 'hey', 'bye']
      },
      {
        id: v1(),
        name: 'Vika',
        messages: ['how are you?', 'ok']
      },
      {
        id: v1(),
        name: 'Gosha',
        messages: ['what\'s up']
      }
    ]
  }
    
    ,
  profilePage: {
    newPostText: '',
    posts: [
      {id: v1(), name: 'Andrey', message: 'hello', likes: 20, dislikes: 10},
      {id: v1(), name: 'Vera', message: 'hello1', likes: 10, dislikes: 12},
      {id: v1(), name: 'Lesha', message: 'hello2', likes: 20, dislikes: 20},
    ]
  },
  sidebar: ['Sveta', 'Kolya', 'Vasya']
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
    if (action.type === 'ADD_POST') {
      this._state.profilePage.posts.push({
        id: v1(),
        name: 'Somebody',
        message: this._state.profilePage.newPostText,
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100)
      })
      this._state.profilePage.newPostText = ''
      this._callSubscriber()
    } else if (action.type === 'CHANGE_TEXT') {
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber()
    } else if (action.type === 'CHANGE_DIALOG_TEXT') {
      this._state.dialogsPage.newDialogText = action.newText
      this._callSubscriber()
    } else if (action.type === 'SEND_DIALOG_MESSAGE') {
      let friend = this._state.dialogsPage.dialogs.find(i => i.id === action.id)
      if (friend) {
        friend.messages.push(action.newText)
      }
      this._callSubscriber()
    }
  }
}

export const addPostAC = () => {
  return {
    type: 'ADD_POST'
  } as const
}

export const changePostTextAC = (text: string) => {
  return {
    type: 'CHANGE_TEXT',
    newText: text
  } as const
}

export const changeDialogTextAC = (text: string) => {
  return {
    type: 'CHANGE_DIALOG_TEXT',
    newText: text
  } as const
}

export const sendDialogMessageAC = (text: string, id: string) => {
  return {
    type: 'SEND_DIALOG_MESSAGE',
    newText: text,
    id: id
  } as const
}

export default store