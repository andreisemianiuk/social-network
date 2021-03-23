import React, { ChangeEvent, useState } from 'react'

type FriendsPageType = {
  friends: string[]
  addFriend: (friend: string) => void
  onChange: (value: string) => void
}

export const FriendsPage = (props: FriendsPageType) => {
  let [value,setValue] = useState('')
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    props.onChange(newValue)
  }
  const addFriend = () => {
    props.addFriend(value)
    setValue('')
    props.onChange(value)
  }
  
  return (
    <div>
      Friends: {props.friends.map((f,i) => <div key={`${f}-${i}`}>{f}</div>)}
      <div>
        <input type={'text'} value={value} onChange={onChange}/>
        <button onClick={addFriend}>Add friend</button>
      </div>
    </div>
  )
}