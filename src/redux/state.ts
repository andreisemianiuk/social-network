import { rerenderEntireTree } from '../render'
import { v1 } from 'uuid'

export type DialogsType = {
  id: string
  name: string
  message: string
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
  dialogsPage: DialogsType[]
  profilePage: ProfilePageType
  sidebar: string[]
}


let state: StateType = {
  dialogsPage: [
    {
      id: v1(),
      name: 'Andrey',
      message: 'hello'
    },
    {
      id: v1(),
      name: 'Vika',
      message: 'how are you?'
    },
    {
      id: v1(),
      name: 'Gosha',
      message: 'what\'s up'
    },
    {
      id: v1(),
      name: 'Lera',
      message: 'how old are you?'
    },
    {
      id: v1(),
      name: 'Sveta',
      message: 'do you like coffee?'
    },
    {
      id: v1(),
      name: 'Dima',
      message: 'are you funny?'
    },
  ],
  profilePage: {
    newPostText: '',
    posts: [
      {id: v1(), name: 'Andrey', message: 'hello', likes: 20, dislikes: 10},
      {id: v1(), name: 'Vera', message: 'hello1', likes: 10, dislikes: 12},
      {id: v1(), name: 'Lesha', message: 'hello2', likes: 20, dislikes: 20},
      {id: v1(), name: 'Slava', message: 'hello3', likes: 30, dislikes: 10},
      {id: v1(), name: 'Vova', message: 'hello4', likes: 10, dislikes: 40}
    ]
  },
  sidebar: ['Sveta', 'Kolya', 'Vasya']
}

export const addPost = () => {
  state.profilePage.posts.push({
    id: v1(),
    name: 'Somebody',
    message: state.profilePage.newPostText,
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100)
  })
  rerenderEntireTree(state)
}

export const changeText = (newText: string) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export default state