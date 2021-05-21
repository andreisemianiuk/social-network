import { RootStateType } from '../redux-store'

export const getInitialized = (state: RootStateType): boolean => {
  return state.app.initialized
}