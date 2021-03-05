import React from 'react'
import { imgUrl } from '../../../images/template/image'
import { Posts } from './Posts/Posts'
import styles from './Profile.module.css'
import { PostType } from '../../../redux/state'

type ProfilePagePropsType = {
  posts: PostType[]
  message: string
  addPost: () => void
  changeText: (t: string) => void
}

export const ProfilePage = (props: ProfilePagePropsType) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgUrl} alt='content'/>
      <Posts posts={props.posts} message={props.message} addPost={props.addPost} changeText={props.changeText}/>
    </div>
  )
}