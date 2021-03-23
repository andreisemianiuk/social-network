import React from 'react'
import styles from './Content.module.css'
import { Route } from 'react-router-dom'
import { ProfilePage } from './Profile/ProfilePage'
import { DialogsPage } from './Dialogs/DialogsPage'
import { AppPropsType } from '../../App'
import { FriendsContainerPage } from './Friends/FriendsContainerPage'

const Content = (props: AppPropsType) => {
  return (
    <div className={styles.content}>
      <Route
        path='/profile'
        render={() => <ProfilePage store={props.store}/>}
      />
      <Route
        path='/dialogs'
        render={() => <DialogsPage store={props.store}/>}
      />
      <Route path='/friends' render={() => <FriendsContainerPage store={props.store} />}/>
    </div>
  )
}

export default Content