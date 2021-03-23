import React from 'react'
import { imgUrl } from '../../../images/template/image'
import styles from './Profile.module.css'
import { AppPropsType } from '../../../App'
import { PostsContainer } from './Posts/PostsContainer'

export const ProfilePage = (props: AppPropsType) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgUrl} alt='content'/>
      <PostsContainer store={props.store}/>
    </div>
  )
}