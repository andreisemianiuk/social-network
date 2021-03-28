import { connect } from 'react-redux'
import { UsersPage } from './UsersPage'
import { followAC, unfollowAC, UserType } from '../../../redux/reducers/users-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

type MapStateToProps = {
  users: UserType[]
}
type MapDispatchToProps = {
  follow: (id: string) => void
  unfollow: (id: string) => void
}
export type UsersPagePropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    users: state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    follow: (id: string) => {
      dispatch(followAC(id))
    },
    unfollow: (id: string) => {
      dispatch(unfollowAC(id))
    }
  }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersPage)