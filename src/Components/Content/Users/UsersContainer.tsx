import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFetching, toggleFollowingProgress,
  unfollow,
} from '../../../redux/reducers/users-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { Users } from './Users'
import { UsersAPI } from '../../../api/Api'

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
    this.props.toggleFetching(true)
    UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleFetching(false)
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }
  
  changeCurrentPage = (page: number) => {
    this.props.toggleFetching(true)
    this.props.setCurrentPage(page)
    UsersAPI.getUsers(page, this.props.pageSize).then(data => {
      this.props.toggleFetching(false)
      this.props.setUsers(data.items)
    })
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
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
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (items: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
    toggleFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (inProgress: boolean, userId: number) => void
  }
export type UsersPagePropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    inFollowingProgress: state.usersPage.inFollowingProgress,
  }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleFetching,
    toggleFollowingProgress,
  },
)(UsersContainer)