import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import {
  changeCurrentPageTC,
  followTC,
  getUsersTC,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFetching,
  toggleFollowingProgress,
  unfollowTC,
} from '../../../redux/reducers/users-reducer'
import { RootStateType } from '../../../redux/redux-store'
import { Users } from './Users'
import { compose } from 'redux'
import {
  getCurrentPage, getInFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../../redux/selectors/users-selectors'

export type UserType = {
  id: number
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
}
export type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string | null
}

class UsersContainer extends React.Component<UsersPagePropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  
  changeCurrentPage = (page: number) => {
    this.props.changeCurrentPage(page, this.props.pageSize)
  }
  
  render() {
    return (
      <>
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          changeCurrentPage={this.changeCurrentPage}
          followTC={this.props.followTC}
          unfollowTC={this.props.unfollowTC}
          isFetching={this.props.isFetching}
          inFollowingProgress={this.props.inFollowingProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    )
  }
  
}

type MapStateToProps = {
  users: UserType[]
  totalUsersCount: number
  currentPage: number
  pageSize: number
  isFetching: boolean
  inFollowingProgress: number[]
}
type MapDispatchToProps =
  {
    setUsers: (items: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
    toggleFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (inProgress: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    changeCurrentPage: (page: number, pageSize: number) => void
    unfollowTC: (id: number) => void
    followTC: (id: number) => void
  }
export type UsersPagePropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: RootStateType): MapStateToProps => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    inFollowingProgress: getInFollowingProgress(state),
  }
}

export default compose<ComponentType>(
  connect<MapStateToProps, MapDispatchToProps, {}, RootStateType>(
    mapStateToProps,
    {
      setUsers,
      setTotalUsersCount,
      setCurrentPage,
      toggleFetching,
      toggleFollowingProgress,
      getUsers: getUsersTC,
      changeCurrentPage: changeCurrentPageTC,
      followTC,
      unfollowTC,
    },
  ),
)(UsersContainer)