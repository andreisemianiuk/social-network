import React from 'react'
import s from './Users.module.css'
import { UserType } from './UsersPage'
import { Avatar } from '../../../images/template/avatar'
import { NavLink } from 'react-router-dom'
import { FollowingAPI } from '../../../api/Api'

type UserPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  toggleFollowingProgress: (inProgress: boolean, userId: number) => void
  inFollowingProgress: number[]
} & UserType

export const User = (props: UserPropsType) => {
  
  const onFollowHandler = () => {
    if (props.followed) {
      props.toggleFollowingProgress(true, props.id)
      FollowingAPI.unfollow(props.id).then(data => {
        if (data.resultCode === 0) {
          props.unfollow(props.id)
        }
        props.toggleFollowingProgress(false, props.id)
      })
    } else if (!props.followed) {
      props.toggleFollowingProgress(true, props.id)
      FollowingAPI.follow(props.id).then(data => {
        if (data.resultCode === 0) {
          props.follow(props.id)
        }
        props.toggleFollowingProgress(false, props.id)
      })
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