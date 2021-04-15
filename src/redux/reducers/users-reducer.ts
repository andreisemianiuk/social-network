import { ActionTypes } from '../redux-store'
import { UserType } from '../../Components/Content/Users/UsersPage'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

type UsersStateType = {
  users: UserType[]
  totalCount: number
  currentPage: number
  pageSize: number
}
const initialState: UsersStateType = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 20,
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionTypes): UsersStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users, ...state.users],
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
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
    totalCount,
  } as const
}
export const setCurrentPageAC = (page: number) => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  } as const
}