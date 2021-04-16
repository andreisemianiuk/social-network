import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFetching,
  unfollow,
} from '../../../redux/reducers/users-reducer'
import { AppStateType } from '../../../redux/redux-store'
import axios from 'axios'
import { Users } from './Users'
import { Preloader } from '../../../common/Preloader/Preloader'

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
    axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
      this.props.toggleFetching(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }
  
  changeCurrentPage = (page: number) => {
    this.props.toggleFetching(true)
    this.props.setCurrentPage(page)
    axios.get<GetUsersResponseType>(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
    ).then(response => {
      this.props.toggleFetching(false)
      this.props.setUsers(response.data.items)
    })
  }
  
  render() {
    return (
      <>
        {this.props.isFetching ?
          <Preloader/> :
          <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            changeCurrentPage={this.changeCurrentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
          />}
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
}
type MapDispatchToProps =
  {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (items: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (page: number) => void
    toggleFetching: (isFetching: boolean) => void
  }
export type UsersPagePropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
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
  },
)(UsersContainer)