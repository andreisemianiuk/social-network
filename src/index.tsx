import React from 'react'
import './index.css'
import state, { addPost, changeText, subscribe } from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      changeText={changeText}
    />,
    document.getElementById('root')
  )
}

rerenderEntireTree()

subscribe(rerenderEntireTree)