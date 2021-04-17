const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type AuthDataType = {
  id: number | null
  email: string | null
  login: string | null
}

export type AuthStateType = {
  data: AuthDataType,
  resultCode: number | null
  messages: string[] | null
}

type ActionTypes = ReturnType<typeof setAuthUser>

const initialState: AuthStateType = {
  data: {
    id: null,
    email: null,
    login: null,
  },
  resultCode: null,
  messages: null,
}

export const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        data: {...action.data},
      }
    default:
      return state
  }
}

export const setAuthUser = (data: AuthDataType) => {
  return {
    type: SET_AUTH_USER_DATA,
    data,
  } as const
}


export default {}