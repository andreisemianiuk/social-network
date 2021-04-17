import React from 'react'
import s from './Users.module.css'
import { UserType } from './UsersPage'
import { Avatar } from '../../../images/template/avatar'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { AuthStateType } from '../../../redux/reducers/auth-reducer'

type UserPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
} & UserType

export const User = (props: UserPropsType) => {
  
  const onFollowHandler = () => {
    if (props.followed) {
      axios.delete<AuthStateType>(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
        {withCredentials: true, headers: {'API-KEY': '7b4001e9-c455-4bb5-8814-d09f26458311'}}).then(response => {
        if (response.data.resultCode === 0) {
          props.unfollow(props.id)
        }
      })
    } else if (!props.followed) {
      axios.post<AuthStateType>(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},
        {withCredentials: true, headers: {'API-KEY': '7b4001e9-c455-4bb5-8814-d09f26458311'}}).then(response => {
        if (response.data.resultCode === 0) {
          props.follow(props.id)
        }
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
        <div onClick={onFollowHandler} className={s.following}>{!props.followed ? 'follow' : 'unfollow'}</div>
      </div>
      <div className={s.fullName}>{props.name}</div>
      <div>{props.status}</div>
    </div>
  )
}