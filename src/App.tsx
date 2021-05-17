import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import Content from './Components/Content/Content'
import SidebarContainer from './Components/Sidebar/Sidebar'
import { connect } from 'react-redux'
import { RootStateType } from './redux/redux-store'
import { initializeApp } from './redux/reducers/app-reducer'
import { Preloader } from './common/Preloaders/Preloader'

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }
  
  render() {
    if (!this.props.initialized) return <Preloader/>
    return (
      <div className="container">
        <Header/>
        <SidebarContainer/>
        <Content/>
      </div>
    )
  }
}

type MapStateToPropsType = {
  initialized: boolean
}
type MapDispatchToPropsType = {
  initializeApp: () => void
}
type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  initialized: state.app.initialized,
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(
  mapStateToProps,
  {
    initializeApp,
  })(App)
