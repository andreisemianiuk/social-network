import { RootStateType } from '../redux-store'
import { PostType } from '../reducers/profile-reducer'

export const getPosts = (state: RootStateType): PostType[] => {
  return state.profilePage.posts
}