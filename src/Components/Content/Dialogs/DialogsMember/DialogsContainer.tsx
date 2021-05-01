import React from 'react'
import {
  changeDialogTextAC,
  DialogsType,
  sendDialogMessageAC,
} from '../../../../redux/reducers/dialog-reducer'
import { AppStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { DialogsPage } from '../DialogsPage'

type MapStateToPropsType = {
  newDialogText: string
  dialogs: DialogsType[]
  isAuth: boolean
}
type MapDispatchToPropsType = {
  onChange: (value: string) => void
  sendMessage: (value: string, id: string) => void
}

export type DialogsPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    newDialogText: state.dialogsPage.newDialogText,
    dialogs: state.dialogsPage.dialogs,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onChange: (value: string) => {
      dispatch(changeDialogTextAC(value))
    },
    sendMessage: (value: string, id: string) => {
      dispatch(sendDialogMessageAC(value,id))
      dispatch(changeDialogTextAC(value))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(DialogsPage)