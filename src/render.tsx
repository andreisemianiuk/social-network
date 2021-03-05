import React from 'react'
import { addPost, changeText, StateType } from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'

export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      changeText={changeText}
    />,
    document.getElementById('root')
  )
}