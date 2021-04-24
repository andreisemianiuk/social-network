import React from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { AuthDataType, AuthStateType, getAuthTC, setAuthUser } from '../../redux/reducers/auth-reducer'

class LoginContainer extends React.Component<PropsType, AppStateType> {
  componentDidMount() {
    this.props.getAuth()
  }
  
  render() {
    return (
      <Login data={this.props.auth.data}/>
    )
  }
}

type MapStateToPropsType = {
  auth: AuthStateType
}
type MapDispatchToPropsType = {
  setAuthUser: (data: AuthDataType) => void
  getAuth: () => void
  // setProfile: (profile: ProfileUserType) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    auth: state.auth,
  }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
  MapStateToProps,
  {
    setAuthUser,
    getAuth: getAuthTC,
  },
)(LoginContainer)