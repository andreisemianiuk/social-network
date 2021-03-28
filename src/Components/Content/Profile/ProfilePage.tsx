import React from 'react'
import styles from './Profile.module.css'
import { PostsContainer } from './Posts/PostsContainer'

export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <PostsContainer />
    </div>
  )
}