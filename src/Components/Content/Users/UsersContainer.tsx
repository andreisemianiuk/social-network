import React from 'react'
import { connect } from 'react-redux'
import {
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  unfollowAC,
} from '../../../redux/reducers/users-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'
import axios from 'axios'
import { Users } from './Users'

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
    axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }
  
  changeCurrentPage = (page: number) => {
    this.props.setCurrentPage(page)
    axios.get<GetUsersResponseType>(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
    ).then(response => {
      this.props.setUsers(response.data.items)
    })
  }
  
  render() {
    return <Users
      users={this.props.users}
      pageSize={this.props.pageSize}
      totalCount={this.props.totalUsersCount}
      currentPage={this.props.currentPage}
      changeCurrentPage={this.changeCurrentPage}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

type MapStateToProps = {
  users: UserType[]
  totalUsersCount: number
  currentPage: number
  pageSize: number
}
type MapDispatchToProps = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsers: (items: UserType[]) => void
  setTotalUsersCount: (totalCount: number) => void
  setCurrentPage: (page: number) => void
}
export type UsersPagePropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    follow: (id: number) => {
      dispatch(followAC(id))
    },
    unfollow: (id: number) => {
      dispatch(unfollowAC(id))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalCountAC(totalCount))
    },
    setCurrentPage: (page: number) => {
      dispatch(setCurrentPageAC(page))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)