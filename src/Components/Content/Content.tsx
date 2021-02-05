import React from 'react'
import styles from './Content.module.css'
import { Route } from 'react-router-dom'
import { ProfilePage } from './Profile/ProfilePage'
import { DialogsPage } from './Dialogs/DialogsPage'
import { FriendsPage } from './Friends/FriendsPage'

const Content = () => {
  return (
    <div className={styles.content}>
      <Route path='/profile' render={() => <ProfilePage/>}/>
      <Route path='/dialogs' render={() => <DialogsPage/>}/>
      <Route path='/friends' render={() => <FriendsPage/>}/>
    </div>
  )
}

export default Content