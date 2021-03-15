import React from 'react'
import { imgUrl } from '../../../images/template/image'
import { Posts } from './Posts/Posts'
import styles from './Profile.module.css'
import { ActionTypes, PostType } from '../../../redux/state'

type ProfilePagePropsType = {
  posts: PostType[]
  message: string
  dispatch: (action: ActionTypes) => void
}

export const ProfilePage = (props: ProfilePagePropsType) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgUrl} alt='content'/>
      <Posts posts={props.posts} message={props.message} dispatch={props.dispatch}/>
    </div>
  )
}