import React from 'react'
import styles from './Post.module.css'
import { Avatar } from '../../../../../images/template/avatar'

type PostPropsType = {
  message: string
  likes: number
  dislikes: number
}

export const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={styles.post}>
      <img className={styles.img} src={Avatar} alt='avatar'/>
      <div>{props.message}</div>
      <div className={styles.likes}>
        <span>Likes: {props.likes}</span>
        <span>Dislikes: {props.dislikes}</span>
      </div>
    </div>
  )
}
