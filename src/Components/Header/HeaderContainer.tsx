import React, { ComponentType } from 'react'
import { HeaderAuth } from './HeaderAuth'
import { connect } from 'react-redux'
import { RootStateType } from '../../redux/redux-store'
import { AuthStateType, logout } from '../../redux/reducers/auth-reducer'
import { compose } from 'redux'
import styles from './Header.module.css'
import logo from '../../images/template/structure.png'
import { NavLink } from 'react-router-dom'

class HeaderContainer extends React.Component<PropsType, RootStateType> {
  
  render() {
    return (
      <header className={styles.header}>
        <NavLink to="/profile">
          <img className={styles.img} src={logo} alt="logo"/>
        </NavLink>
        <HeaderAuth
          isAuth={this.props.auth.isAuth}
          authData={this.props.auth.authData}
          logout={this.props.logout}
        />
      </header>
    )
  }
}

type MapStateToPropsType = {
  auth: AuthStateType
}
type MapDispatchToPropsType = {
  logout: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    auth: state.auth
  }
}

export default compose<ComponentType>(
  // withAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(
    MapStateToProps,
    {
      logout,
    }),
)(HeaderContainer)