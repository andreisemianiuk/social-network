import React, { ComponentType } from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import { RootStateType } from '../../redux/redux-store'
import { AuthStateType, getAuthUserDataTC, logout } from '../../redux/reducers/auth-reducer'
import { compose } from 'redux'

class LoginContainer extends React.Component<PropsType, RootStateType> {
  componentDidMount() {
    this.props.getAuthUserData()
  }
  
  render() {
    return (
      <Login
        isAuth={this.props.auth.isAuth}
        login={this.props.auth.authData.login}
        photo={this.props.photo}
        logout={this.props.logout}
      />
    )
  }
}

type MapStateToPropsType = {
  auth: AuthStateType
  photo: string | undefined
}
type MapDispatchToPropsType = {
  getAuthUserData: () => void
  logout: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    auth: state.auth,
    photo: state.profilePage.profile?.photos.small
  }
}

export default compose<ComponentType>(
  // withAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(
    MapStateToProps,
    {
      getAuthUserData: getAuthUserDataTC,
      logout
    }),
)(LoginContainer)