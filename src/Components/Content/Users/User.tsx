import React from 'react'
import s from './Users.module.css'
import { UserType } from './UsersPage'
import { Avatar } from '../../../images/template/avatar'

type UserPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
} & UserType

export const User = (props: UserPropsType) => {
  const onFollowHandler = () => {
    if (props.followed) {
      props.unfollow(props.id)
    } else {
      props.follow(props.id)
    }
  }
  
  return (
    <div className={s.container}>
      <div className={s.leftSideContainer}>
        <div>
          <img className={s.image} src={props.photos.small ? props.photos.small : Avatar} alt={'ava'}/>
        </div>
        <div onClick={onFollowHandler} className={s.following}>{props.followed ? 'follow' : 'unfollow'}</div>
      </div>
      <div className={s.fullName}>{props.name}</div>
      <div>{props.status}</div>
    </div>
  )
}