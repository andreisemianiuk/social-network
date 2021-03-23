import React from 'react'
import { addPostAC, changePostTextAC } from '../../../../redux/reducers/profile-reducer'
import { Posts } from './Posts'
import { AppPropsType } from '../../../../App'

export const PostsContainer = ({store}: AppPropsType) => {
  const state = store.getState().profilePage
  
  const onChangeHandler = (value: string) => {
    store.dispatch(changePostTextAC(value))
  }
  const addPostHandler = () => {
    store.dispatch(addPostAC())
    store.dispatch(changePostTextAC(''))
  }
  
  return <Posts onChange={onChangeHandler} addPost={addPostHandler} posts={state.posts} newPostText={state.newPostText}/>
}