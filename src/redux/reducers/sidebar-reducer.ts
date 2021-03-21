import { ActionTypes, CHANGE_FRIEND, SEND_FRIEND, SidebarType } from '../store'

const initialState = {
  newFriend: '',
  friends: ['Sveta', 'Kolya', 'Vasya'],
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionTypes) => {
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