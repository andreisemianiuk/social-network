import React from 'react'
import { ProfileInfo } from './ProfileInfo'
import { AppStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import { ProfileUserType, setProfile } from '../../../../redux/reducers/profile-reducer'
import { Preloader } from '../../../../common/Preloader/Preloader'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { ProfileAPI } from '../../../../api/Api'


type PathParamsType = {
  userId: string | undefined,
}
type PropsType = ProfileInfoContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileInfoContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '12041'
    }
    ProfileAPI.getProfile(userId).then(data => {
      this.props.setProfile(data)
    })
  }
  
  render() {
    return (
      <>
        {this.props.profile ?
          <ProfileInfo profile={this.props.profile}/>
          : <Preloader/>}
      </>
    )
  }
  
}

type MapStateToPropsType = {
  profile: ProfileUserType | null
}

type MapDispatchToPropsType =
  {
    setProfile: (profile: ProfileUserType) => void
  }

type ProfileInfoContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
  mapStateToProps,
  {
    setProfile,
  }
  ,
)(withRouter(ProfileInfoContainer))