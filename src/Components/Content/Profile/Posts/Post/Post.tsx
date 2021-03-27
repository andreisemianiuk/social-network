import React from 'react'
import styles from './Post.module.css'
import { Avatar } from '../../../../../images/template/avatar'
import { PostType } from '../../../../../redux/reducers/profile-reducer'



export const Post: React.FC<PostType> = ({name, message, likes, dislikes}) => {
  return (
    <div className={styles.post}>
      <div className={styles.desk}>
        <img className={styles.img} src={Avatar} alt='avatar'/>
        <div>{name}</div>
      </div>
      <div className={styles.message}>{message}</div>
      <div className={styles.likes}>
        <span>Likes: {likes}</span>
        <span>Dislikes: {dislikes}</span>
      </div>
    </div>
  )
}
