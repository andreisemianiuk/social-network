import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header/>
        <Sidebar/>
        <Content/>
      </div>
    </BrowserRouter>
  )
}

export default App
