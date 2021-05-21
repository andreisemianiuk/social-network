import { RootStateType } from '../redux-store'
import { UserType } from '../../Components/Content/Users/UsersContainer'

export const getUsers = (state: RootStateType): UserType[] => {
  return state.usersPage.users
}
export const getTotalUsersCount = (state: RootStateType): number => {
  return state.usersPage.totalCount
}
export const getCurrentPage = (state: RootStateType): number => {
  return state.usersPage.currentPage
}
export const getPageSize = (state: RootStateType): number => {
  return state.usersPage.pageSize
}
export const getIsFetching = (state: RootStateType): boolean => {
  return state.usersPage.isFetching
}
export const getInFollowingProgress = (state: RootStateType): number[] => {
  return state.usersPage.inFollowingProgress
}