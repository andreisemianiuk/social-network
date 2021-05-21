import { RootStateType } from '../redux-store'
import { AuthStateType } from '../reducers/auth-reducer'

export const getAuth = (state: RootStateType): AuthStateType => {
  return state.auth
}