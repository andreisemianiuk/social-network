import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import { BrowserRouter } from 'react-router-dom'
import { ActionTypes, StateType } from './redux/store'

export type AppPropsType = {
  state: StateType
  dispatch: (action: ActionTypes) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Sidebar friends={props.state.sidebar.friends}/>
        <Content state={props.state} dispatch={props.dispatch} />
      </div>
    </BrowserRouter>
  )
}

export default App
