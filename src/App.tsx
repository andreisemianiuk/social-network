import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import { BrowserRouter } from 'react-router-dom'
import { StateType } from './redux/state'

export type AppPropsType = {
  state: StateType
  addPost: () => void
  changeText: (text: string) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Sidebar friends={props.state.sidebar}/>
        <Content state={props.state} addPost={props.addPost} changeText={props.changeText}/>
      </div>
    </BrowserRouter>
  )
}

export default App
