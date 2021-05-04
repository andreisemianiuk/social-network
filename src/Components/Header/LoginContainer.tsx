import React, { ComponentType } from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { AuthStateType, getAuthTC, setUserData, setAuthUser, getUserDataTC } from '../../redux/reducers/auth-reducer'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class LoginContainer extends React.Component<PropsType, AppStateType> {
  componentDidMount() {
    this.props.getAuth()
    this.props.getUserData()
  }
  
  render() {
    return (
      <Login data={this.props.auth} userData={this.props.userData}/>
    )
  }
}

type MapStateToPropsType =
  {
    userData: Array<string | undefined>
    auth: AuthStateType
  }
type MapDispatchToPropsType =
  {
    setAuthUser: (data: AuthStateType) => void
    getAuth:() => void
    setUserData: (data: Array<string | undefined>) => void
    getUserData: () => void
    
  }
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    auth: state.auth,
    userData: [state.profilePage.profile?.fullName, state.profilePage.profile?.photos.small],
  }
}

export default compose
< ComponentType > (
  // withAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    MapStateToProps,
    {
      setUserData,
      setAuthUser,
      getAuth: getAuthTC,
      getUserData:getUserDataTC
    })
)(LoginContainer)