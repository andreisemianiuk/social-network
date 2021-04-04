import React from 'react'
import s from './Users.module.css'
import { UserType } from './UsersPage'
import { Avatar } from '../../../images/template/avatar'
//
// type UserPropsType = {
//   follow: (id: number) => void
//   unfollow: (id: number) => void
// } & UserType

export const User = (props: UserType) => {
  // const onFollowHandler = () => {
  //   if (props.isFollow) {
  //     props.unfollow(props.id)
  //   } else {
  //     props.follow(props.id)
  //   }
  // }
  
  return (
    <div className={s.container}>
      <div className={s.leftSideContainer}>
        <div>
          <img className={s.image} src={props.photos.small ? props.photos.small : Avatar} alt={'ava'}/>
        </div>
        {/*<div onClick={onFollowHandler} className={s.following}>{props.isFollow ? 'follow' : 'unfollow'}</div>*/}
      </div>
      <div className={s.fullName}>{props.name}</div>
      <div>{props.status}</div>
      {/*<div>{props.age}</div>*/}
    </div>
  )
}