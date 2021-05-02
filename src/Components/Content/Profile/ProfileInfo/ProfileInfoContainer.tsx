import React, { ComponentType } from 'react'
import { ProfileInfo } from './ProfileInfo'
import { AppStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import { getProfileTC, ProfileUserType, setProfile } from '../../../../redux/reducers/profile-reducer'
import { Preloader } from '../../../../common/Preloader/Preloader'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect'
import { compose } from 'redux'

export type PathParamsType = {
  userId: string | undefined,
}
type PropsType = ProfileInfoContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileInfoContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '12041'
    }
    this.props.getProfile(userId)
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
    getProfile: (userId: string) => void
  }

type ProfileInfoContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose<ComponentType>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    {
      setProfile,
      getProfile: getProfileTC,
    }),
  withRouter,
  withAuthRedirect,
)(ProfileInfoContainer)