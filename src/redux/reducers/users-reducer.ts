import { UserType } from '../../Components/Content/Users/UsersPage'
import { ThunkAction } from 'redux-thunk'
import { FollowingAPI, UsersAPI } from '../../api/Api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

export type UsersStateType = {
  users: UserType[]
  totalCount: number
  currentPage: number
  pageSize: number
  isFetching: boolean
  inFollowingProgress: number[]
}
const initialState: UsersStateType = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 20,
  isFetching: false,
  inFollowingProgress: [],
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
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        inFollowingProgress: action.inProgress
          ? [...state.inFollowingProgress, action.userId]
          : state.inFollowingProgress.filter(id => id !== action.userId),
      }
  }
  return state
}

type ActionTypes =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof toggleFetching>
  | ReturnType<typeof toggleFollowingProgress>


export const follow = (id: number) => {
  return {
    type: FOLLOW,
    id,
  } as const
}
export const unfollow = (id: number) => {
  return {
    type: UNFOLLOW,
    id,
  } as const
}
export const setUsers = (users: UserType[]) => {
  return {
    type: SET_USERS,
    users,
  } as const
}
export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  } as const
}
export const setCurrentPage = (page: number) => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  } as const
}
export const toggleFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_FETCHING,
    isFetching,
  } as const
}
export const toggleFollowingProgress = (inProgress: boolean, userId: number) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    inProgress,
    userId,
  } as const
}

type UsersThunkType = ThunkAction<void, UsersStateType, unknown, ActionTypes>

export const getUsersTC = (currentPage: number, pageSize: number): UsersThunkType =>
  (dispatch) => {
    dispatch(toggleFetching(true))
    UsersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
export const changeCurrentPageTC = (page: number, pageSize: number): UsersThunkType =>
  (dispatch) => {
    dispatch(toggleFetching(true))
    dispatch(setCurrentPage(page))
    UsersAPI.getUsers(page, pageSize).then(data => {
      dispatch(toggleFetching(false))
      dispatch(setUsers(data.items))
    })
  }
export const unfollowTC = (id: number):UsersThunkType => (dispatch) => {
  dispatch(toggleFollowingProgress(true, id))
  FollowingAPI.unfollow(id).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollow(id))
    }
    dispatch(toggleFollowingProgress(false, id))
  })
}
export const followTC = (id: number):UsersThunkType => (dispatch) => {
  dispatch(toggleFollowingProgress(true, id))
  FollowingAPI.follow(id).then(data => {
    if (data.resultCode === 0) {
      dispatch(follow(id))
    }
    dispatch(toggleFollowingProgress(false, id))
  })
}