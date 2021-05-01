import { ThunkAction } from 'redux-thunk'
import { AuthAPI } from '../../api/Api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type AuthStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export type ResponseAuthType = {
  data: AuthStateType,
  resultCode: number | null
  messages: string[] | null
}

type ActionTypes = ReturnType<typeof setAuthUser>

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
    default:
      return state
  }
}

export const setAuthUser = (data: AuthStateType) => {
  return {
    type: SET_AUTH_USER_DATA,
    data,
  } as const
}

type AuthThunkType = ThunkAction<void, ResponseAuthType, unknown, ActionTypes>

export const getAuthTC = (): AuthThunkType => (dispatch) => {
  AuthAPI.me().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUser(data.data))
    }
  })
}