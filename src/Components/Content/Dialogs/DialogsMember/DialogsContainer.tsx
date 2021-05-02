import React, { ComponentType } from 'react'
import {
  changeDialogTextAC,
  DialogsType,
  sendDialogMessageAC,
} from '../../../../redux/reducers/dialog-reducer'
import { AppStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { DialogsPage } from '../DialogsPage'
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect'

type MapStateToPropsType = {
  newDialogText: string
  dialogs: DialogsType[]
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
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onChange: (value: string) => {
      dispatch(changeDialogTextAC(value))
    },
    sendMessage: (value: string, id: string) => {
      dispatch(sendDialogMessageAC(value, id))
      dispatch(changeDialogTextAC(value))
    },
  }
}

export const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(DialogsPage)