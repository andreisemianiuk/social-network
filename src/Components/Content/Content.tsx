import React from 'react'
import styles from './Content.module.css'
import { Route } from 'react-router-dom'
import { ProfilePage } from './Profile/ProfilePage'
import { DialogsPage } from './Dialogs/DialogsPage'
import { FriendsPage } from './Friends/FriendsPage'
import { AppPropsType } from '../../App'

const Content = (props: AppPropsType) => {
  return (
    <div className={styles.content}>
      <Route path='/profile'
             render={() => <ProfilePage posts={props.state.profilePage.posts}
                                        message={props.state.profilePage.newPostText}
                                        dispatch={props.dispatch}/>
             }
      />
      <Route path='/dialogs'
             render={() => <DialogsPage dialogs={props.state.dialogsPage.dialogs}
                                        dispatch={props.dispatch}/>
             }/>
      <Route path='/friends' render={() => <FriendsPage sidebar={props.state.sidebar}
                                                        dispatch={props.dispatch} />}/>
    </div>
  )
}

export default Content