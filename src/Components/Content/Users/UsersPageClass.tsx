import React from 'react'
import { User } from './User'
import { UsersPagePropsType } from './UsersContainer'
import axios from 'axios'
import styles from './Users.module.css'

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
    axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }
  
  changeCurrentPage = (page: number) => {
    this.props.setCurrentPage(page)
    axios.get<GetUsersResponseType>(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
    ).then(response => {
      this.props.setUsers(response.data.items)
    })
  }
  
  render() {
    
    const countOfPages: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= countOfPages; i++) {
      pages.push(i)
    }
    
    return (
      <div>
        <div>{pages.map(v =>
          <span
            onClick={() => this.changeCurrentPage(v)}
            className={this.props.currentPage === v ? styles.selected : ''}
          >
            {v}
          </span>).slice(0, 20)
        }
        </div>
        {this.props.users.map(u =>
          <User
            key={u.id}
            name={u.name}
            id={u.id}
            photos={u.photos}
            status={u.status}
            followed={u.followed}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />,
        )}
      </div>
    )
  }
}