import { ThunkAction } from 'redux-thunk'
import { AuthAPI, ProfileAPI } from '../../api/Api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_USER_DATA = 'SET_USER_DATA'

export type AuthStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type ActionTypes = ReturnType<typeof setAuthUser | typeof setUserData>

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export const setUserData = (data: Array<string | undefined>) => {
  return {
    type: SET_USER_DATA,
    data,
  } as const
}
export const setAuthUser = (data: AuthStateType) => {
  return {
    type: SET_AUTH_USER_DATA,
    data,
  } as const
}

type AuthThunkType = ThunkAction<void, ResponseType, unknown, ActionTypes>

export const getAuthTC = (): AuthThunkType => (dispatch) => {
  AuthAPI.me().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUser(data.data))
    }
  })
}
export const getUserDataTC = (): AuthThunkType => (dispatch) => {
  AuthAPI.me().then(data => {
    const userId = String(data.data.id)
    if (data.resultCode === 0) {
      ProfileAPI.getProfile(userId).then(data => {
        const name = data.fullName
        const img = data.photos.small
        dispatch(setUserData([name, img]))
      })
    }
  })
  
}