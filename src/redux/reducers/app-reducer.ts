import { getAuthUserDataTC } from './auth-reducer'
import { RootThunkType } from '../redux-store'

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

export type AppStateType = {
  initialized: boolean
}

export type AppActionTypes = ReturnType<typeof setInitializedSuccess>

const initialState: AppStateType = {
  initialized: false,
}

export const appReducer = (state: AppStateType = initialState, action: AppActionTypes): AppStateType => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
        
      }
    default:
      return state
  }
}

export const setInitializedSuccess = () => {
  return {
    type: SET_INITIALIZED_SUCCESS,
  } as const
}

export const initializeApp = (): RootThunkType =>
  async (dispatch) => {
    await dispatch(getAuthUserDataTC())
    dispatch(setInitializedSuccess())
  }