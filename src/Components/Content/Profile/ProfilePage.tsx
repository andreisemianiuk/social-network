import React from 'react'
import { imgUrl } from '../../../images/template/image'
import { Posts } from './Posts/Posts'
import styles from './Profile.module.css'


export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgUrl} alt='content'/>
      <Posts />
    </div>
  )
}