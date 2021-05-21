import { RootStateType } from '../redux-store'

export const getFriends = (state: RootStateType): string[] => {
  return state.sidebar.friends
}