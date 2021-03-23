import React from 'react'
import { changeFriendAC, sendFriendAC } from '../../../redux/reducers/sidebar-reducer'
import { AppPropsType } from '../../../App'
import { FriendsPage } from './FriendsPage'

export const FriendsContainerPage = (props: AppPropsType) => {
  const onChangeHandler = (value: string) => {
    props.store.dispatch(changeFriendAC(value))
  }
  const addFriendHandler = (friend: string) => {
    props.store.dispatch(sendFriendAC(friend))
    props.store.dispatch(changeFriendAC(''))
  }
  
  return <FriendsPage
    friends={props.store.getState().sidebar.friends}
    onChange={onChangeHandler}
    addFriend={addFriendHandler}
  />
}