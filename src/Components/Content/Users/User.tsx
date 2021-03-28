import React from 'react'
import s from './Users.module.css'

type UserPropsType = {
  id: string
  status: string
  avatar: string
  fullName: string
  age: number
  sex: string
  isFollow: boolean
  follow: (id: string) => void
  unfollow: (id: string) => void
}

export const User = ({id, fullName, status, avatar, age, isFollow, sex, follow,unfollow}: UserPropsType) => {
  const onFollowHandler = () => {
    if (isFollow) {
      unfollow(id)
    } else {
      follow(id)
    }
  }
  return (
    <div className={s.container}>
      <div className={s.leftSideContainer}>
        <div>
          <img className={s.image} src={avatar} alt={'ava'}/>
        </div>
        <div onClick={onFollowHandler} className={s.following}>{isFollow ? 'follow' : 'unfollow'}</div>
      </div>
      <div>{fullName}</div>
      <div>Status: {status}</div>
      <div>Sex: {sex}</div>
      <div>Age: {age}</div>
    </div>
  )
}