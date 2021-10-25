import { v1 } from 'uuid'
import { ProfileAPI } from '../../api/Api'
import { RootThunkType } from '../redux-store'

const ADD_POST = 'ADD_POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_STATUS_IS_FETCHING = 'SET_STATUS_IS_FETCHING'

export type ProfileActionTypes = ReturnType<typeof addPostAC
  | typeof setProfile
  | typeof setStatus
  | typeof setStatusIsFetching>

export type ProfilePageType = {
  posts: PostType[]
  profile: ProfileUserType | null
  status: string | null
  statusIsFetching: boolean
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
  posts: [
    {id: v1(), name: 'Andrey', message: 'hello', likes: 20, dislikes: 10},
    {id: v1(), name: 'Vera', message: 'hello1', likes: 10, dislikes: 12},
    {id: v1(), name: 'Lesha', message: 'hello2', likes: 20, dislikes: 20},
  ],
  profile: null,
  status: null,
  statusIsFetching: false,
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: v1(),
        name: 'Somebody',
        message: action.newPostText,
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
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
    case SET_STATUS_IS_FETCHING:
      return {
        ...state,
        statusIsFetching: action.isFetching,
      }
    default:
      return state
  }
}

export const addPostAC = (newPostText: string) => {
  return {
    type: ADD_POST,
    newPostText,
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
export const setStatusIsFetching = (isFetching: boolean) => {
  return {
    type: SET_STATUS_IS_FETCHING,
    isFetching,
  } as const
}

//Thunk Creators
export const getProfileTC = (userId: string): RootThunkType => (dispatch) => {
  ProfileAPI.getProfile(userId).then(data => {
    dispatch(setProfile(data))
  })
}
export const getStatusTC = (userId: string): RootThunkType => (dispatch) => {
  ProfileAPI.getStatus(userId).then(data => {
    dispatch(setStatus(data))
  })
}
export const changeStatusTC = (status: string): RootThunkType => (dispatch) => {
  try {
    dispatch(setStatusIsFetching(true))
    ProfileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
        dispatch(setStatusIsFetching(false))
      }
    })
  } catch (e) {
    console.log(e.data.error)
  }
}