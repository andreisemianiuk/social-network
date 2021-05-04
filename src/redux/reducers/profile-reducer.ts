import { v1 } from 'uuid'
import { ThunkAction } from 'redux-thunk'
import { ProfileAPI } from '../../api/Api'

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

type ActionTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof changePostTextAC>
  | ReturnType<typeof setProfile>
  | ReturnType<typeof setStatus>

export type ProfilePageType = {
  newPostText: string
  posts: PostType[]
  profile: ProfileUserType | null
  status: string | null
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


const initialState: ProfilePageType = {
  newPostText: '',
  posts: [
    {id: v1(), name: 'Andrey', message: 'hello', likes: 20, dislikes: 10},
    {id: v1(), name: 'Vera', message: 'hello1', likes: 10, dislikes: 12},
    {id: v1(), name: 'Lesha', message: 'hello2', likes: 20, dislikes: 20},
  ],
  profile: null,
  status: null,
}

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
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
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
export const setStatus = (status: string) => {
  return {
    type: SET_STATUS,
    status,
  } as const
}
// export const changeStatus = (status: string) => {
//   return {
//     type: SET_STATUS,
//     status,
//   } as const
// }


type ProfileThunkType = ThunkAction<void, ProfilePageType, unknown, ActionTypes>

export const getProfileTC = (userId: string): ProfileThunkType => (dispatch) => {
  ProfileAPI.getProfile(userId).then(data => {
    dispatch(setProfile(data))
  })
}
export const getStatusTC = (userId: string): ProfileThunkType => (dispatch) => {
  ProfileAPI.getStatus(userId).then(data => {
    dispatch(setStatus(data))
  })
}
export const changeStatusTC = (status: string): ProfileThunkType => (dispatch) => {
  ProfileAPI.updateStatus(status).then(data => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}