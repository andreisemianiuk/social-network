import React from 'react'
import { User } from './User'
import { UsersPagePropsType } from './UsersContainer'
import axios from 'axios'

export type UserType = {
  id: number
  name: string
  status: string
  photos: {
    small:string
    large: string
  }
  followed: boolean
}

export type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string | null
}

export const UsersPage = (props: UsersPagePropsType) => {
  
  if (!props.users.length) {
    axios.get<GetUsersResponseType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {debugger
      props.setUsers(response.data.items)
      props.setTotalCount(response.data.totalCount)
    })
  }
  
  return (
    <div>
      <span>{props.totalCount}</span>
      {props.users.map(u =>
        <User
          key={u.id}
          name={u.name}
          id={u.id}
          photos={u.photos}
          status={u.status}
          followed={u.followed}
          // follow={props.follow}
          // unfollow={props.unfollow}
        />,
      )}
    </div>
  )
}