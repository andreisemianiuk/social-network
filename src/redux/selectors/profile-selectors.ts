import { RootStateType } from '../redux-store'
import { ProfileUserType } from '../reducers/profile-reducer'

export const getProfile = (state: RootStateType): ProfileUserType | null => {
  return state.profilePage.profile
}
export const getStatus = (state: RootStateType): string | null => {
  return state.profilePage.status
}
export const getAuthorizedUserId = (state: RootStateType): number | null => {
  return state.auth.authData.id
}