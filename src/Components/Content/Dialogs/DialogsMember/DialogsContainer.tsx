import React, { ComponentType } from 'react'
import {
  DialogsType,
  sendDialogMessageAC,
} from '../../../../redux/reducers/dialog-reducer'
import { RootStateType } from '../../../../redux/redux-store'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { DialogsPage } from '../DialogsPage'
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect'
import { getDialogs } from '../../../../redux/selectors/dialogs-selectors'

type MapStateToPropsType = {
  dialogs: DialogsType[]
}
type MapDispatchToPropsType = {
  sendMessage: (value: string, id: string) => void
}

export type DialogsPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  dialogs: getDialogs(state),
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  sendMessage: (value: string, id: string) => {
    dispatch(sendDialogMessageAC(value, id))
  },
})

export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(DialogsPage)