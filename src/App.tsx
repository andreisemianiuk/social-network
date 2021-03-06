import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import { BrowserRouter } from 'react-router-dom'
import { ActionsTypes, StateType } from './redux/state'

export type AppPropsType = {
  state: StateType
  dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Sidebar friends={props.state.sidebar}/>
        <Content state={props.state} dispatch={props.dispatch} />
      </div>
    </BrowserRouter>
  )
}

export default App
