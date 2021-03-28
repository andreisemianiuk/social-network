import { ActionTypes } from '../redux-store'
import { v1 } from 'uuid'
import { Avatar } from '../../images/template/avatar'

export type UserType = {
  id: string
  status: string
  fullName: string
  avatar: string
  age: number
  sex: string
  isFollow: boolean
}
export type UsersStateType = {
  users: UserType[]
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState: UsersStateType = {
  users: [
    {id: v1(), status: 'Lives Belarus!', fullName: 'Andrey', avatar: Avatar, age: 33, sex: 'male', isFollow: false},
    {id: v1(), status: 'Lives Belarus!', fullName: 'Vika', avatar: Avatar, age: 24, sex: 'female', isFollow: false},
    {id: v1(), status: 'Lives Belarus!', fullName: 'Gosha', avatar: Avatar, age: 32, sex: 'male', isFollow: false},
    {id: v1(), status: 'Lives Belarus!', fullName: 'Dasha', avatar: Avatar, age: 32, sex: 'female', isFollow: false},
  ],
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionTypes) => {
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
  }
  return state
}

export const followAC = (id: string) => {
  return {
    type: FOLLOW,
    id,
  } as const
}
export const unfollowAC = (id: string) => {
  return {
    type: UNFOLLOW,
    id,
  } as const
}