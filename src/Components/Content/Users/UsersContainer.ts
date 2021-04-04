import { connect } from 'react-redux'
import { UserType } from './UsersPage'
import { followAC, setTotalCountAC, setUsersAC, unfollowAC } from '../../../redux/reducers/users-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'
import { UsersPageClass } from './UsersPageClass'

type MapStateToProps = {
  users: UserType[]
  totalCount: number
}
type MapDispatchToProps = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsers: (items:UserType[]) => void
  setTotalCount: (totalCount:number) => void
}
export type UsersPagePropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount
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
    setTotalCount: (totalCount: number) => {
      dispatch(setTotalCountAC(totalCount))
    }
  }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersPageClass)