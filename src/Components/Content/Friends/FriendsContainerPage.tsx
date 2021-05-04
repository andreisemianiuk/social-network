import React from 'react'
import { changeFriendAC, addFriendAC } from '../../../redux/reducers/sidebar-reducer'
import { FriendsPage } from './FriendsPage'
import { AppStateType } from '../../../redux/redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

type MapStateToPropsType = {
  friends: string[]
}
type MapDispatchToPropsType = {
  onChange: (value: string) => void
  addFriend: (friend: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    friends: state.sidebar.friends,
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onChange: (value: string) => {
      dispatch(changeFriendAC(value))
    },
    addFriend: (friend: string) => {
      dispatch(addFriendAC(friend))
      dispatch(changeFriendAC(''))
    },
  }
}

export const FriendsContainerPage = connect(mapStateToProps, mapDispatchToProps)(FriendsPage)