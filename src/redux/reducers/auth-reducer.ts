import { AuthAPI, ProfileAPI } from '../../api/Api'
import { FormDataType } from '../../Components/Login/LoginForm'
import { RootThunkType } from '../redux-store'

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

export type AuthActionTypes =
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof setIsAuth>

const initialState: AuthStateType = {
  authData: {id: null, login: null, email: null, photo: ''},
  isAuth: false,
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionTypes): AuthStateType => {
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


export const login = (data: FormDataType): RootThunkType =>
  async (dispatch) => {
    const res = await AuthAPI.login(data)
    if (res.resultCode === 0) {
      dispatch(getAuthUserDataTC())
    }
  }
export const logout = (): RootThunkType =>
  async (dispatch) => {
    const res = await AuthAPI.logout()
    if (res.resultCode === 0) {
      dispatch(setAuthUserData({login: null, email: null, id: null}))
      dispatch(setIsAuth(false))
    }
  }

export const getAuthUserDataTC = (): RootThunkType =>
  async (dispatch) => {
    const res = await AuthAPI.me()
    if (res.resultCode === 0) {
      const userId = res.data.id
      if (userId) {
        const response = await ProfileAPI.getProfile(userId.toString())
        dispatch(setAuthUserData({...res.data, photo: response.photos.small}))
      }
      dispatch(setIsAuth(true))
    }
  }