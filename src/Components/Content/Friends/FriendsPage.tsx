import React, { ChangeEvent, useState } from 'react'
import { ActionTypes, SidebarType } from '../../../redux/store'
import { changeFriendAC, sendFriendAC } from '../../../redux/reducers/sidebar-reducer'

type FriendsPageType = {
  sidebar: SidebarType
  dispatch: (action: ActionTypes) => void
}

export const FriendsPage = (props: FriendsPageType) => {
  let [value,setValue] = useState('')
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    props.dispatch(changeFriendAC(newValue))
  }
  const addFriend = () => {
    props.dispatch(sendFriendAC(value))
    setValue('')
    props.dispatch(changeFriendAC(value))
  }
  
  return (
    <div>
      Friends: {props.sidebar.friends.map((f,i) => <div key={`${f}-${i}`}>{f}</div>)}
      <div>
        <input type={'text'} value={value} onChange={onChange}/>
        <button onClick={addFriend}>Add friend</button>
      </div>
    </div>
  )
}