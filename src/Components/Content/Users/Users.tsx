import React from 'react'
import { User } from './User'
import styles from './Users.module.css'
import { UsersStateType } from '../../../redux/reducers/users-reducer'

type UsersPropsType = {
  changeCurrentPage: (value: number) => void
  follow: (id: number) => void
  unfollow: (id: number) => void
} & UsersStateType


export const Users = (props: UsersPropsType) => {
  const countOfPages: number = Math.ceil(props.totalCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i)
  }
  
  return (
    <div>
      <div>{pages.map(v =>
        <span
          onClick={() => props.changeCurrentPage(v)}
          className={`${styles.page} ${props.currentPage === v ? styles.selected : ''}`}
        >
            {v}
          </span>).slice(0, 20)
      }
      </div>
      {props.users.map(u =>
        <User
          key={u.id}
          name={u.name}
          id={u.id}
          photos={u.photos}
          status={u.status}
          followed={u.followed}
          follow={props.follow}
          unfollow={props.unfollow}
        />,
      )}
    </div>
  )
}