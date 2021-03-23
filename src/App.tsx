import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import { BrowserRouter } from 'react-router-dom'
import { ActionTypes, DialogsPageType, ProfilePageType, SidebarType } from './redux/store'
import { CombinedState, Store } from 'redux'
import { StoreContext } from './StoreContext'

export type StoreType = Store<CombinedState<{ dialogsPage: DialogsPageType; profilePage: ProfilePageType; sidebar: SidebarType; }>, ActionTypes>

export type AppPropsType = {
  store: StoreType
}

function App() {
  return <StoreContext.Consumer>
    {
      (store) => (<BrowserRouter>
        <div className='container'>
          <Header/>
          <Sidebar friends={store.getState().sidebar.friends}/>
          <Content store={store}/>
        </div>
      </BrowserRouter>)
    }
    </StoreContext.Consumer>
}

export default App
