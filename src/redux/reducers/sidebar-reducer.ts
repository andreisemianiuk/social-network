import { ActionTypes } from '../redux-store'

const SEND_FRIEND = 'SEND_FRIEND'
const CHANGE_FRIEND = 'CHANGE_FRIEND'

export type SidebarStateType = {
  newFriend: string
  friends: string[]
}

const initialState: SidebarStateType = {
  newFriend: '',
  friends: ['Sveta', 'Kolya', 'Vasya'],
}

export const sidebarReducer = (state: SidebarStateType = initialState, action: ActionTypes): SidebarStateType => {
  switch (action.type) {
    case SEND_FRIEND:
      return {
        ...state,
        friends: [...state.friends, action.newFriend],
      }
    case CHANGE_FRIEND:
      return {
        ...state,
        newFriend: action.newFriend,
      }
    default:
      return state
  }
}

export const changeFriendAC = (friend: string) => {
  return {
    type: CHANGE_FRIEND,
    newFriend: friend,
  } as const
}

export const sendFriendAC = (friend: string) => {
  return {
    type: SEND_FRIEND,
    newFriend: friend,
  } as const
}