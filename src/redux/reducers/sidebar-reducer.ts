const ADD_FRIEND = 'ADD_FRIEND'
const CHANGE_FRIEND = 'CHANGE_FRIEND'

export type ActionTypes =
  | ReturnType<typeof changeFriendAC>
  | ReturnType<typeof addFriendAC>


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
    case ADD_FRIEND:
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

export const addFriendAC = (friend: string) => {
  return {
    type: ADD_FRIEND,
    newFriend: friend,
  } as const
}