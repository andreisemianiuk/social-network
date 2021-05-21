import React from 'react'
import s from './Users.module.css'
import { UserType } from './UsersPage'
import { Avatar } from '../../../images/template/avatar'
import { NavLink } from 'react-router-dom'

type UserPropsType = {
  unfollowTC: (id: number) => void
  followTC: (id: number) => void
  toggleFollowingProgress: (inProgress: boolean, userId: number) => void
  inFollowingProgress: number[]
} & UserType

export const User = (props: UserPropsType) => {
  
  const onFollowHandler = () => {
    if (props.followed) {
      props.unfollowTC(props.id)
    } else if (!props.followed) {
      props.followTC(props.id)
    }
  }
  
  return (
    <div className={s.container}>
      <div className={s.leftSideContainer}>
        <div>
          <NavLink to={`/profile/${props.id}?`}>
            <img className={s.image} src={props.photos.small ? props.photos.small : Avatar}
                 alt={'ava'}/>
          </NavLink>
        </div>
        <button
          onClick={onFollowHandler}
          className={s.followingBtn}
          disabled={props.inFollowingProgress.some(v => v === props.id)}
        >
          {!props.followed ? 'follow' : 'unfollow'}
        </button>
      </div>
      <div className={s.fullName}>{props.name}</div>
      <div>{props.status}</div>
    </div>
  )
}