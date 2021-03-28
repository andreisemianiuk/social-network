import React from 'react'
import { UsersPagePropsType } from './UsersContainer'
import { User } from './User'

export const UsersPage = (props: UsersPagePropsType) => {
  return (
    <div>{props.users.map(u =>
      <User
        key={u.id}
        id={u.id}
        status={u.status}
        avatar={u.avatar}
        fullName={u.fullName}
        age={u.age}
        sex={u.sex}
        follow={u.follow}
      />,
    )}
    </div>
  )
}