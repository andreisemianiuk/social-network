import React from 'react'
import styles from './Content.module.css'
import { Route } from 'react-router-dom'
import { ProfilePage } from './Profile/ProfilePage'
import { FriendsContainerPage } from './Friends/FriendsContainerPage'
import { DialogsContainer } from './Dialogs/DialogsMember/DialogsContainer'

const Content = () => {
  return (
    <div className={styles.content}>
      <Route
        path='/profile'
        render={() => <ProfilePage/>}
      />
      <Route
        path='/dialogs'
        render={() => <DialogsContainer/>}
      />
      <Route
        path='/friends'
        render={() => <FriendsContainerPage/>}
      />
    </div>
  )
}

export default Content