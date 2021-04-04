import { ActionTypes } from '../redux-store'
import { UserType } from '../../Components/Content/Users/UsersPage'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

// export type UserType = {
//   id: number
//   status: string
//   fullName: string
//   avatar: string
//   age: number
//   sex: string
//   isFollow: boolean
// }
type UsersStateType = {
  users: UserType[]
  totalCount: number
}
const initialState = {
  users: [],
  totalCount: 0
}

// export type UsersStateType = typeof initialState

export const usersReducer = (state: UsersStateType = initialState, action: ActionTypes):UsersStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.id ? {...u, isFollow: true} : u),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.id ? {...u, isFollow: false} : u),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      }
  }
  return state
}

export const followAC = (id: number) => {
  return {
    type: FOLLOW,
    id,
  } as const
}
export const unfollowAC = (id: number) => {
  return {
    type: UNFOLLOW,
    id,
  } as const
}
export const setUsersAC = (users: UserType[]) => {
  return {
    type: SET_USERS,
    users,
  } as const
}
export const setTotalCountAC = (totalCount: number) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount
  } as const
}