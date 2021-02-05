import React from 'react'
import styles from './Content.module.css'
import { imgUrl } from '../../images/template/image'
import { Route } from 'react-router-dom'
import { ProfilePage } from './Profile/ProfilePage'
import { DialogsPage } from './Dialogs/DialogsPage'
import { PostsPage } from './Posts/PostsPage'
import { FriendsPage } from './Friends/FriendsPage'

const Content = () => {
  return (
    <div className={styles.content}>
      <img src={imgUrl} alt='content'/>
      <Route path='/profile' render={() => <ProfilePage title={'This is props of ProfilePage'}/>}/>
      <Route path='/dialogs' render={() => <DialogsPage id={1} message={'Hello Samurai'} likesCount={2} date={new Date().toLocaleString()}/>}/>
      <Route path='/posts' render={() => <PostsPage id={1} message={'This is a first post'}/>}/>
      <Route path='/friends' render={() => <FriendsPage/>}/>
    </div>
  )
}

export default Content