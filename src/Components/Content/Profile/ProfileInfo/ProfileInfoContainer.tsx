import React, { ComponentType } from 'react'
import { ProfileInfo } from './ProfileInfo'
import { RootStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import {
  changeStatusTC,
  getProfileTC,
  getStatusTC,
  ProfileUserType,
  setProfile,
} from '../../../../redux/reducers/profile-reducer'
import { Preloader } from '../../../../common/Preloaders/Preloader'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import {
  getAuthorizedUserId,
  getProfile,
  getStatus,
  getStatusIsFetching,
} from '../../../../redux/selectors/profile-selectors'

export type PathParamsType = {
  userId: string | undefined,
}
type PropsType = ProfileInfoContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileInfoContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      if (this.props.authorizedUserId) {
        userId = this.props.authorizedUserId.toString()
      }
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    if (typeof userId === 'string') {
      this.props.getProfile(userId)
      this.props.getStatus(userId)
    }
  }
  
  render() {
    return (
      <>
        {this.props.profile ?
          <ProfileInfo
            profile={this.props.profile}
            status={this.props.status}
            changeStatus={this.props.changeStatus}
            statusIsFetching={this.props.statusIsFetching}
          />
          : <Preloader/>}
      </>
    )
  }
  
}

type MapStateToPropsType = {
  profile: ProfileUserType | null
  status: string | null
  statusIsFetching: boolean
  authorizedUserId: number | null
}

type MapDispatchToPropsType = {
  setProfile: (profile: ProfileUserType) => void
  getProfile: (userId: string) => void
  getStatus: (userId: string) => void
  changeStatus: (status: string) => void
  // changeStatusIsFetching: (isFetching: boolean) => void
}

type ProfileInfoContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  profile: getProfile(state),
  status: getStatus(state),
  statusIsFetching:  getStatusIsFetching(state),
  authorizedUserId: getAuthorizedUserId(state),
})

export default compose<ComponentType>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(
    mapStateToProps,
    {
      setProfile,
      getProfile: getProfileTC,
      getStatus: getStatusTC,
      changeStatus: changeStatusTC,
      // changeStatusIsFetching
    }),
  withRouter,
)(ProfileInfoContainer)