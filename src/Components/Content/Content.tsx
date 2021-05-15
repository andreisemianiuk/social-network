import React from 'react'
import styles from './Content.module.css'
import { Route } from 'react-router-dom'
import { ProfilePage } from './Profile/ProfilePage'
import { FriendsContainerPage } from './Friends/FriendsContainerPage'
import UsersContainer from './Users/UsersContainer'
import DialogsContainer from './Dialogs/DialogsMember/DialogsContainer'
import { LoginPage } from '../Header/LoginForm'

const Content = () => {
  return (
    <div className={styles.content}>
      <Route
        path="/profile/:userId?"
        render={() => <ProfilePage/>}
      />
      <Route
        path="/dialogs"
        render={() => <DialogsContainer/>}
      />
      <Route
        path="/users"
        render={() => <UsersContainer/>}
      />
      <Route
        path="/friends"
        render={() => <FriendsContainerPage/>}
      />
      <Route
        path="/login"
        render={() => <LoginPage/>}
      />
    </div>
  )
}

export default Content