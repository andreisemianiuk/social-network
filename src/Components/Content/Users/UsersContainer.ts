import { connect } from 'react-redux'
import { UserType } from './UsersPage'
import {
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  unfollowAC,
} from '../../../redux/reducers/users-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'
import { UsersPageClass } from './UsersPageClass'

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

export const UsersContainer = connect(mapStateToProps,
  mapDispatchToProps)
(UsersPageClass)