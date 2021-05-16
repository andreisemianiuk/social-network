import { ThunkAction } from 'redux-thunk'
import { AuthAPI } from '../../api/Api'
import { FormDataType } from '../../Components/Header/LoginForm'
import { Dispatch } from 'redux'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_IS_AUTH = 'SET_IS_AUTH'


export type AuthUserDataType = {
  id: number | null
  email: string | null
  login: string | null
  photo?: string
}
export type AuthStateType = {
  authData: AuthUserDataType
  isAuth: boolean
}

type ActionTypes =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof setIsAuth>
  
const initialState: AuthStateType = {
  authData: {id: null, login: null, email: null, photo: ''},
  isAuth: false,
}

export const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        authData: {...action.data},
        
      }
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      }
    default:
      return state
  }
}
export const setIsAuth = (isAuth: boolean) => {
  return {
    type: SET_IS_AUTH,
    isAuth,
  } as const
}

export const setAuthUserData = (data: AuthUserDataType) => {
  return {
    type: SET_AUTH_USER_DATA,
    data,
  } as const
}

type AuthThunkType = ThunkAction<void, ResponseType, unknown, ActionTypes>

export const login = (data: FormDataType): AuthThunkType =>
  (dispatch: Dispatch<ActionTypes>) => {
    AuthAPI.login(data).then(res => {
      if (res.resultCode === 0) {
        dispatch(setIsAuth(true))
      }
    })
  }
export const logout = (): AuthThunkType =>
  (dispatch: Dispatch<ActionTypes>) => {
    AuthAPI.logout().then(res => {
      if (res.resultCode === 0) {
        dispatch(setAuthUserData({login: null, email: null, id: null}))
        dispatch(setIsAuth(false))
      }
    })
  }

export const getAuthUserDataTC = (): AuthThunkType =>
  (dispatch: Dispatch<ActionTypes>) => {
    AuthAPI.me().then(data => {
      if (data.resultCode === 0) {
        dispatch(setIsAuth(true))
        dispatch(setAuthUserData(data.data))
      }
    })
  }