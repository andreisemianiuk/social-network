import React from 'react'
import { changeFriendAC, sendFriendAC } from '../../../redux/reducers/sidebar-reducer'
import { FriendsPage } from './FriendsPage'
import { StoreContext } from '../../../StoreContext'

export const FriendsContainerPage = () => {
  return <StoreContext.Consumer>
    {
      (store) => {
        const onChangeHandler = (value: string) => {
          store.dispatch(changeFriendAC(value))
        }
        const addFriendHandler = (friend: string) => {
          store.dispatch(sendFriendAC(friend))
          store.dispatch(changeFriendAC(''))
        }
        return (
          <FriendsPage
            friends={store.getState().sidebar.friends}
            onChange={onChangeHandler}
            addFriend={addFriendHandler}
          />
        )
      }
    }
  </StoreContext.Consumer>
}