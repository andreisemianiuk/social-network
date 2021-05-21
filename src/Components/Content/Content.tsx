import React from 'react'
import styles from './Content.module.css'
import { Route } from 'react-router-dom'
import { ProfilePage } from './Profile/ProfilePage'
import UsersContainer from './Users/UsersContainer'
import DialogsContainer from './Dialogs/DialogsMember/DialogsContainer'
import { LoginPage } from '../Login/LoginForm'
import FriendsContainer from './Friends/FriendsContainer'

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
        render={() => <FriendsContainer/>}
      />
      <Route
        path="/login"
        render={() => <LoginPage/>}
      />
    </div>
  )
}

export default Content