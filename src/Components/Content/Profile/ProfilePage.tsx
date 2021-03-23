import React from 'react'
import { imgUrl } from '../../../images/template/image'
import styles from './Profile.module.css'
import { PostsContainer } from './Posts/PostsContainer'

export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgUrl} alt='content'/>
      <PostsContainer />
    </div>
  )
}