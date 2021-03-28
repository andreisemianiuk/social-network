import React from 'react'
import { UserType } from '../../../redux/reducers/users-reducer'
import s from './Users.module.css'

export const User = ({fullName, status, avatar, age, follow, sex}: UserType) => {
  const onFollow = () => {
  
  }
  return (
    <div className={s.container}>
      <div className={s.leftSideContainer}>
        <div>
          <img className={s.image} src={avatar}/>
        </div>
        <div onClick={onFollow}>{follow ? 'follow' : 'unfollow'}</div>
      </div>
      <div>{fullName}</div>
      <div>Status: {status}</div>
      <div>Sex: {sex}</div>
      <div>Age: {age}</div>
    </div>
  )
}