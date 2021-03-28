import { ActionTypes } from '../redux-store'
import { v1 } from 'uuid'
import { Avatar }  from '../../images/template/avatar'

export type UserType = {
  id: string
  status: string
  fullName: string
  avatar: string
  age: number
  sex: string
  follow: boolean
}
// export type UsersType = {
//   users: UserType[]
// }
export type UsersStateType = {
  users: UserType[]
}

const initialState: UsersStateType = {
  users: [
    {id: v1(), status: 'Lives Belarus!', fullName: 'Andrey', avatar: Avatar, age: 33, sex: 'male', follow: false},
    {id: v1(), status: 'Lives Belarus!', fullName: 'Vika', avatar: Avatar, age: 24, sex: 'female', follow: false},
    {id: v1(), status: 'Lives Belarus!', fullName: 'Gosha', avatar: Avatar, age: 32, sex: 'male', follow: false},
    {id: v1(), status: 'Lives Belarus!', fullName: 'Dasha', avatar: Avatar, age: 32, sex: 'female', follow: false},
  ],
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionTypes) => {
  return state
}