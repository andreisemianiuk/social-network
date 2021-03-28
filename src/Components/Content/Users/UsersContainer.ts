import { connect } from 'react-redux'
import { UsersPage } from './UsersPage'
import {  UserType } from '../../../redux/reducers/users-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

type MapStateToProps = {
  users: UserType[]
}
type MapDispatchToProps = {

}
export type UsersPagePropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    users: state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    // usersPage: state.usersPage
  }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersPage)