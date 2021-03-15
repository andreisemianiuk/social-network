import { v1 } from 'uuid'
import { ActionTypes, ADD_POST, CHANGE_POST_TEXT, ProfilePageType } from '../state'

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: v1(),
        name: 'Somebody',
        message: state.newPostText,
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    case CHANGE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state
  }
}

export const addPostAC = () => {
  return {
    type: ADD_POST,
  } as const
}

export const changePostTextAC = (text: string) => {
  return {
    type: CHANGE_POST_TEXT,
    newText: text,
  } as const
}