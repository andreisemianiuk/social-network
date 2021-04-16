import { v1 } from 'uuid'

export type ProfilePageType = {
  newPostText: string
  posts: PostType[]
  profile: ProfileUserType | null
}
export type ProfileUserType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
}
export type PostType = {
  id: string
  name: string
  message: string
  likes: number
  dislikes: number
}

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const SET_PROFILE = 'SET_PROFILE'

type ActionTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof changePostTextAC>
  | ReturnType<typeof setProfile>

const initialState: ProfilePageType = {
  newPostText: '',
  posts: [
    {id: v1(), name: 'Andrey', message: 'hello', likes: 20, dislikes: 10},
    {id: v1(), name: 'Vera', message: 'hello1', likes: 10, dislikes: 12},
    {id: v1(), name: 'Lesha', message: 'hello2', likes: 20, dislikes: 20},
  ],
  profile: null
}

// profile: {
//   userId: 2,
//     lookingForAJob: true,
//     lookingForAJobDescription: '',
//     fullName: '',
//     contacts: {
//     github: '',
//       vk: '',
//       facebook: '',
//       instagram: '',
//       twitter: '',
//       website: '',
//       youtube: '',
//       mainLink: '',
//   },
//   photos: {
//     small: '',
//       large: '',
//   },
// },

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
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
        newPostText: action.newText,
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
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

export const setProfile = (profile: ProfileUserType) => {
  return {
    type: SET_PROFILE,
    profile,
  } as const
}