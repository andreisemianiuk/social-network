import React from 'react'
import { changeFriendAC, addFriendAC } from '../../../redux/reducers/sidebar-reducer'
import { FriendsPage } from './FriendsPage'
import { RootStateType } from '../../../redux/redux-store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getFriends } from '../../../redux/selectors/sidebar-selectors'

type MapStateToPropsType = {
  friends: string[]
}
type MapDispatchToPropsType = {
  onChange: (value: string) => void
  addFriend: (friend: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  friends: getFriends(state),
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  onChange: (value: string) => {
    dispatch(changeFriendAC(value))
  },
  addFriend: (friend: string) => {
    dispatch(addFriendAC(friend))
    dispatch(changeFriendAC(''))
  },
})

export default connect<MapStateToPropsType,MapDispatchToPropsType,{},RootStateType>(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPage)