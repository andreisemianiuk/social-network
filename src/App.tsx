import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import Content from './Components/Content/Content'
import SidebarContainer from './Components/Sidebar/Sidebar'

function App() {
  return (
    <div className='container'>
      <Header/>
      <SidebarContainer/>
      <Content />
    </div>
  )
}

export default App
