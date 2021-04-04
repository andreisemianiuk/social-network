import React from 'react'
import { User } from './User'
import { UsersPagePropsType } from './UsersContainer'
import axios from 'axios'

export type UserType = {
  id: number
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
}
export type GetUsersResponseType = {
  items: UserType[]
  totalCount: number
  error: string | null
}

export class UsersPageClass extends React.Component<UsersPagePropsType> {

  componentDidMount() {
    axios.get<GetUsersResponseType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalCount(response.data.totalCount)
    })
  }
  
  render() {
    return (
      <div>
        <div>Total users: {this.props.totalCount}</div>
        {/*<button onClick={this.getUsers}>GetUsers</button>*/}
        {this.props.users.map(u =>
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
}