import React from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { AuthDataType, AuthStateType, setAuthUser } from '../../redux/reducers/auth-reducer'
import { AuthAPI } from '../../api/Api'

// import { ProfileUserType, setProfile } from '../../redux/reducers/profile-reducer'

class LoginContainer extends React.Component<PropsType, AppStateType> {
  componentDidMount() {
    AuthAPI.me().then(data => {
      this.props.setAuthUser(data.data)
    })
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
  {setAuthUser},
)(LoginContainer)