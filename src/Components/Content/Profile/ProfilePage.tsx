import React from 'react'
import styles from './Profile.module.css'
import { PostsContainer } from './Posts/PostsContainer'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'

export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <ProfileInfoContainer />
      <PostsContainer />
    </div>
  )
}