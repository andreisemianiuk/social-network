import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'
import { StoreContext } from './StoreContext'

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>,
      document.getElementById('root')
    
    
  )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)